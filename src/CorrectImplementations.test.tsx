import { StrictMode } from "react";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Counter as UseRefStoringIntervalId } from "./UseRefStoringIntervalId";
import { Counter as UseEffectSchedulingInterval } from "./UseEffectSchedulingInterval";
import { Counter as UseEffectSchedulingTimeoutRecursively } from "./UseEffectSchedulingTimeoutRecursively";
import { Counter as HandleStartFunctionSchedulingTimeoutRecursively } from "./HandleStartFunctionSchedulingTimeoutRecursively";
import { Counter as UseSyncExternalStoreSchedulingInterval } from "./UseSyncExternalStoreSchedulingInterval";
import { Counter as UseSyncExternalStoreSchedulingTimeoutRecursively } from "./UseSyncExternalStoreSchedulingTimeoutRecursively";

const counters = [
  { name: "useRef storing interval id", Counter: UseRefStoringIntervalId },
  {
    name: "useEffect scheduling interval",
    Counter: UseEffectSchedulingInterval,
  },
  {
    name: "useEffect scheduling timeout recursively",
    Counter: UseEffectSchedulingTimeoutRecursively,
  },
  {
    name: "handleStart function scheduling timeout recursively",
    Counter: HandleStartFunctionSchedulingTimeoutRecursively,
  },
  {
    name: "useSyncExternalStore scheduling interval",
    Counter: UseSyncExternalStoreSchedulingInterval,
  },
  {
    name: "useSyncExternalStore scheduling timeout recursively",
    Counter: UseSyncExternalStoreSchedulingTimeoutRecursively,
  },
];

counters.forEach(({ name, Counter }) => {
  describe(name, () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      cleanup();
      vi.useRealTimers();
    });

    it("shows a count of zero and schedules nothing before the first start", () => {
      render(<Counter />, { wrapper: StrictMode });

      expect(screen.getByText(/^count:/).textContent).toBe("count: 0");
      expect(vi.getTimerCount()).toBe(0);
    });

    it("increments the count by one every second after start", () => {
      render(<Counter />, { wrapper: StrictMode });
      fireEvent.click(screen.getByRole("button", { name: "start" }));

      act(() => {
        vi.advanceTimersByTime(1000);
      });
      expect(screen.getByText(/^count:/).textContent).toBe("count: 1");

      act(() => {
        vi.advanceTimersByTime(1000);
      });
      expect(screen.getByText(/^count:/).textContent).toBe("count: 2");

      act(() => {
        vi.advanceTimersByTime(1000);
      });
      expect(screen.getByText(/^count:/).textContent).toBe("count: 3");
    });

    it("waits for a full second before the first increment", () => {
      render(<Counter />, { wrapper: StrictMode });
      fireEvent.click(screen.getByRole("button", { name: "start" }));

      act(() => {
        vi.advanceTimersByTime(999);
      });
      expect(screen.getByText(/^count:/).textContent).toBe("count: 0");

      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(screen.getByText(/^count:/).textContent).toBe("count: 1");
    });

    it("keeps the count unchanged after stop", () => {
      render(<Counter />, { wrapper: StrictMode });
      fireEvent.click(screen.getByRole("button", { name: "start" }));
      act(() => {
        vi.advanceTimersByTime(2000);
      });

      fireEvent.click(screen.getByRole("button", { name: "stop" }));
      act(() => {
        vi.advanceTimersByTime(10000);
      });

      expect(screen.getByText(/^count:/).textContent).toBe("count: 2");
    });

    it("continues from the stopped count when start is clicked again", () => {
      render(<Counter />, { wrapper: StrictMode });
      fireEvent.click(screen.getByRole("button", { name: "start" }));
      act(() => {
        vi.advanceTimersByTime(1000);
      });
      fireEvent.click(screen.getByRole("button", { name: "stop" }));
      act(() => {
        vi.advanceTimersByTime(10000);
      });

      fireEvent.click(screen.getByRole("button", { name: "start" }));
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      expect(screen.getByText(/^count:/).textContent).toBe("count: 2");
    });

    it("measures a full second from the restart instead of from the last increment", () => {
      render(<Counter />, { wrapper: StrictMode });
      fireEvent.click(screen.getByRole("button", { name: "start" }));
      act(() => {
        vi.advanceTimersByTime(1500);
      });
      fireEvent.click(screen.getByRole("button", { name: "stop" }));
      fireEvent.click(screen.getByRole("button", { name: "start" }));

      act(() => {
        vi.advanceTimersByTime(999);
      });
      expect(screen.getByText(/^count:/).textContent).toBe("count: 1");

      act(() => {
        vi.advanceTimersByTime(1);
      });
      expect(screen.getByText(/^count:/).textContent).toBe("count: 2");
    });

    it("ignores start while the counter already runs", () => {
      render(<Counter />, { wrapper: StrictMode });
      fireEvent.click(screen.getByRole("button", { name: "start" }));
      fireEvent.click(screen.getByRole("button", { name: "start" }));
      fireEvent.click(screen.getByRole("button", { name: "start" }));

      act(() => {
        vi.advanceTimersByTime(1000);
      });

      expect(screen.getByText(/^count:/).textContent).toBe("count: 1");
    });

    it("ignores stop before the counter starts", () => {
      render(<Counter />, { wrapper: StrictMode });

      fireEvent.click(screen.getByRole("button", { name: "stop" }));

      expect(screen.getByText(/^count:/).textContent).toBe("count: 0");
      expect(vi.getTimerCount()).toBe(0);
    });

    it("resets the count to zero and keeps counting while the counter runs", () => {
      render(<Counter />, { wrapper: StrictMode });
      fireEvent.click(screen.getByRole("button", { name: "start" }));
      act(() => {
        vi.advanceTimersByTime(2000);
      });

      fireEvent.click(screen.getByRole("button", { name: "reset" }));
      expect(screen.getByText(/^count:/).textContent).toBe("count: 0");

      act(() => {
        vi.advanceTimersByTime(1000);
      });
      expect(screen.getByText(/^count:/).textContent).toBe("count: 1");
    });

    it("resets the count to zero and stays at zero while the counter is stopped", () => {
      render(<Counter />, { wrapper: StrictMode });
      fireEvent.click(screen.getByRole("button", { name: "start" }));
      act(() => {
        vi.advanceTimersByTime(2000);
      });
      fireEvent.click(screen.getByRole("button", { name: "stop" }));

      fireEvent.click(screen.getByRole("button", { name: "reset" }));
      act(() => {
        vi.advanceTimersByTime(10000);
      });

      expect(screen.getByText(/^count:/).textContent).toBe("count: 0");
    });

    it("clears the pending timer on unmount", () => {
      const { unmount } = render(<Counter />, { wrapper: StrictMode });
      fireEvent.click(screen.getByRole("button", { name: "start" }));
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      unmount();

      expect(vi.getTimerCount()).toBe(0);
    });
  });
});
