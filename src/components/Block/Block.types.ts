import type { ReactNode, ElementType } from "react";
import type { MantineSpacing } from "@mantine/core";

export type Spacing = MantineSpacing | number;

// Responsive width props
export interface WidthResponsiveProps {
  width?: string | number;
  widthXs?: string | number;
  widthSm?: string | number;
  widthMd?: string | number;
  widthLg?: string | number;
  widthXl?: string | number;
}

// Responsive row props
export interface RowResponsiveProps {
  row?: boolean;
  rowXs?: boolean;
  rowSm?: boolean;
  rowMd?: boolean;
  rowLg?: boolean;
  rowXl?: boolean;
}

// Responsive col props
export interface ColResponsiveProps {
  col?: boolean;
  colXs?: boolean;
  colSm?: boolean;
  colMd?: boolean;
  colLg?: boolean;
  colXl?: boolean;
}

/**
 * Base props for all Block-based components. Extend this interface in other components (e.g. MantineCard) for consistent prop support.
 */
export interface BlockProps
  extends WidthResponsiveProps,
    RowResponsiveProps,
    ColResponsiveProps {
  border?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderTop?: boolean;
  bottom?: boolean;
  center?: boolean;
  children?: ReactNode;
  className?: string;
  cols?: number;
  column?: boolean;
  compact?: boolean;
  component?: ElementType;
  cozy?: boolean;
  fill?: boolean;
  grid?: boolean;
  inset?: boolean;
  inverse?: boolean;
  left?: boolean;
  maxWidth?: string | number;
  middle?: boolean;
  onClick?: () => void;
  right?: boolean;
  secondary?: boolean;
  top?: boolean;
  withBorder?: boolean;
  withGap?: boolean | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
