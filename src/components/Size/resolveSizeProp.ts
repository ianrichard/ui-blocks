import type { SizeProp, SizeProps } from "./sizeTypes";
import { SIZE_VALUES } from "./sizeConstants";
import type { MantineSizes } from "./sizeConstants";

export function resolveSizeProp(
  props: SizeProps,
  textSize?: SizeProp,
  increment: number = 0
): MantineSizes {
  let resolved: SizeProp | undefined;
  if (props.scaleCompact) resolved = "xs";
  else if (props.scaleCozy) resolved = "xl";
  else if (props.textSize) resolved = props.textSize;
  else resolved = (textSize as SizeProp) || "md";
  // Only allow valid Mantine sizes for stepping
  const validSize = SIZE_VALUES.includes(resolved as MantineSizes)
    ? (resolved as MantineSizes)
    : "md";
  function getMantineSteppedSize(
    textSize: MantineSizes | undefined,
    order: readonly MantineSizes[],
    increment: number = 0
  ): MantineSizes {
    const idx = textSize ? order.indexOf(textSize) : order.indexOf("md");
    const safeIdx = idx === -1 ? order.indexOf("md") : idx;
    const newIdx = Math.max(0, Math.min(order.length - 1, safeIdx + increment));
    return order[newIdx];
  }
  return getMantineSteppedSize(validSize, SIZE_VALUES, increment);
}
