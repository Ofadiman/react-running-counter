export const waitSync = (milliseconds: number) => {
  const now = Date.now()

  while (true) {
    if (now + milliseconds < Date.now()) {
      break
    }
  }
}
