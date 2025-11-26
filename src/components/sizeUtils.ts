export function getMantineSteppedSize<T extends string>(
  size: T | undefined,
  order: readonly T[],
  increment: number = 0
): T {
  const idx = size ? order.indexOf(size) : order.indexOf("md" as T);
  const safeIdx = idx === -1 ? order.indexOf("md" as T) : idx;
  const newIdx = Math.max(0, Math.min(order.length - 1, safeIdx + increment));
  return order[newIdx];
}
