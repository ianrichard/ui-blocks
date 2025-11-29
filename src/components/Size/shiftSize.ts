import { SIZE_VALUES } from "./sizeConstants";
import type { MantineSizes } from "./sizeConstants";

export function getShiftedSize(
  size: MantineSizes | undefined,
  increment: number = 0
): MantineSizes {
  const idx = size ? SIZE_VALUES.indexOf(size) : SIZE_VALUES.indexOf("md");
  const safeIdx = idx === -1 ? SIZE_VALUES.indexOf("md") : idx;
  const newIdx = Math.max(
    0,
    Math.min(SIZE_VALUES.length - 1, safeIdx + increment)
  );
  return SIZE_VALUES[newIdx];
}
