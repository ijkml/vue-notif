function isValidTimeout(timeout: any): timeout is number {
  return Number(timeout) >= 0 && Number.isFinite(timeout);
}

export { isValidTimeout };
