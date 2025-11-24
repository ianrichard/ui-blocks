import type { BlockProps } from "./Block.types";

// Utility to generate Mantine Flex props from BlockProps
export function getFlexProps({
  row,
  column,
  gap,
  left,
  right,
  center,
  justify,
  top,
  middle,
  bottom,
}: BlockProps) {
  const flexProps: Record<string, unknown> = {};
  flexProps.direction = row ? "row" : column ? "column" : undefined;
  if (gap) flexProps.gap = gap;
  if (left) flexProps.justify = "flex-start";
  if (right) flexProps.justify = "flex-end";
  if (center) flexProps.justify = "center";
  if (justify) flexProps.justify = "space-between";
  if (top) flexProps.align = "flex-start";
  if (middle) flexProps.align = "center";
  if (bottom) flexProps.align = "flex-end";
  return flexProps;
}

// Utility to generate Mantine Grid props from BlockProps
export function getGridProps({ cols, gap }: BlockProps) {
  const gridProps: Record<string, unknown> = {};
  if (cols) gridProps.cols = cols;
  if (gap) gridProps.gutter = gap;
  return gridProps;
}
