import type { MantineSize } from "@mantine/core";

export interface ResponsiveIconSizeProps {
  size?: MantineSize;
  sizeXs?: MantineSize;
  sizeSm?: MantineSize;
  sizeMd?: MantineSize;
  sizeLg?: MantineSize;
  sizeXl?: MantineSize;
}

export function useResponsiveIconSizeProp(
  props: ResponsiveIconSizeProps
): MantineSize {
  if (props.sizeXs) return props.sizeXs;
  if (props.sizeSm) return props.sizeSm;
  if (props.sizeMd) return props.sizeMd;
  if (props.sizeLg) return props.sizeLg;
  if (props.sizeXl) return props.sizeXl;
  return props.size || "md";
}
