export function sum(a: number, b: number) {
  return a + b;
}

export function sqrt(nb: number) {
  if (nb < 0) {
    throw new Error('nb must be positive');
  }

  return Math.sqrt(nb);
}
