// util function that computes the fibonacci numbers
export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer");
  } else if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}