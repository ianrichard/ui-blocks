// Utility to extract flexbox-related props for Mantine Flex
import type { BlockProps } from "./Block.types";

export function getFlexboxProps(props: BlockProps) {
  const flexboxProps: Record<string, unknown> = {};
  if (props.fill) flexboxProps.flex = 1;
  // col is not used for Flex, only for Grid
  return flexboxProps;
}
