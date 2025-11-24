// Utility to extract height props for Mantine components
import type { BlockProps } from "./Block.types";

export function getHeightProps(props: BlockProps) {
  const heightProps: Record<string, unknown> = {};
  if (props.height) heightProps.h = props.height;
  if (props.minHeight) heightProps.minH = props.minHeight;
  if (props.maxHeight) heightProps.maxH = props.maxHeight;
  return heightProps;
}
