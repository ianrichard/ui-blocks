export type SizeValue =
  | "sizeCompact"
  | "sizeCozy"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface SizeResolvableProps {
  size?: SizeValue;
  sizeCompact?: boolean;
  sizeCozy?: boolean;
}

export const mantineSizes = ["xs", "sm", "md", "lg", "xl"] as const;
export type MantineSizes = (typeof mantineSizes)[number];

export function resolveSizeProp(
  props: SizeResolvableProps,
  contextSize?: string | undefined,
  increment: number = 0
): MantineSizes {
  let resolved: SizeValue | undefined;
  if (props.sizeCompact) resolved = "xs";
  else if (props.sizeCozy) resolved = "xl";
  else if (props.size) resolved = props.size;
  else resolved = (contextSize as SizeValue) || "md";
  // Only allow valid Mantine sizes for stepping
  const validSize = mantineSizes.includes(resolved as MantineSizes)
    ? (resolved as MantineSizes)
    : "md";
  function getMantineSteppedSize(
    size: MantineSizes | undefined,
    order: readonly MantineSizes[],
    increment: number = 0
  ): MantineSizes {
    const idx = size ? order.indexOf(size) : order.indexOf("md");
    const safeIdx = idx === -1 ? order.indexOf("md") : idx;
    const newIdx = Math.max(0, Math.min(order.length - 1, safeIdx + increment));
    return order[newIdx];
  }
  return getMantineSteppedSize(validSize, mantineSizes, increment);
}
