import type { ReactNode, ElementType } from "react";
import type { MantineSize } from "@mantine/core";

export type WidthProp = string | number;
export type HeightProp = string | number;

export interface WidthResponsiveProps {
  width?: WidthProp;
  widthXs?: WidthProp;
  widthSm?: WidthProp;
  widthMd?: WidthProp;
  widthLg?: WidthProp;
  widthXl?: WidthProp;
  minWidth?: WidthProp;
  minWidthXs?: WidthProp;
  minWidthSm?: WidthProp;
  minWidthMd?: WidthProp;
  minWidthLg?: WidthProp;
  minWidthXl?: WidthProp;
  maxWidth?: WidthProp;
  maxWidthXs?: WidthProp;
  maxWidthSm?: WidthProp;
  maxWidthMd?: WidthProp;
  maxWidthLg?: WidthProp;
  maxWidthXl?: WidthProp;
}

export interface HeightResponsiveProps {
  height?: HeightProp;
  heightXs?: HeightProp;
  heightSm?: HeightProp;
  heightMd?: HeightProp;
  heightLg?: HeightProp;
  heightXl?: HeightProp;
  minHeight?: HeightProp;
  minHeightXs?: HeightProp;
  minHeightSm?: HeightProp;
  minHeightMd?: HeightProp;
  minHeightLg?: HeightProp;
  minHeightXl?: HeightProp;
  maxHeight?: HeightProp;
  maxHeightXs?: HeightProp;
  maxHeightSm?: HeightProp;
  maxHeightMd?: HeightProp;
  maxHeightLg?: HeightProp;
  maxHeightXl?: HeightProp;
}

export interface ColsResponsiveProps {
  cols?: number;
  colsXs?: number;
  colsSm?: number;
  colsMd?: number;
  colsLg?: number;
  colsXl?: number;
}

export interface SpaceResponsiveProps {
  outerSpace?: boolean | MantineSize;
  outerSpaceXs?: boolean | MantineSize;
  outerSpaceSm?: boolean | MantineSize;
  outerSpaceMd?: boolean | MantineSize;
  outerSpaceLg?: boolean | MantineSize;
  outerSpaceXl?: boolean | MantineSize;
  outerSpaceTop?: boolean | MantineSize;
  outerSpaceTopXs?: boolean | MantineSize;
  outerSpaceTopSm?: boolean | MantineSize;
  outerSpaceTopMd?: boolean | MantineSize;
  outerSpaceTopLg?: boolean | MantineSize;
  outerSpaceTopXl?: boolean | MantineSize;
  outerSpaceBottom?: boolean | MantineSize;
  outerSpaceBottomXs?: boolean | MantineSize;
  outerSpaceBottomSm?: boolean | MantineSize;
  outerSpaceBottomMd?: boolean | MantineSize;
  outerSpaceBottomLg?: boolean | MantineSize;
  outerSpaceBottomXl?: boolean | MantineSize;
  outerSpaceLeft?: boolean | MantineSize;
  outerSpaceLeftXs?: boolean | MantineSize;
  outerSpaceLeftSm?: boolean | MantineSize;
  outerSpaceLeftMd?: boolean | MantineSize;
  outerSpaceLeftLg?: boolean | MantineSize;
  outerSpaceLeftXl?: boolean | MantineSize;
  outerSpaceRight?: boolean | MantineSize;
  outerSpaceRightXs?: boolean | MantineSize;
  outerSpaceRightSm?: boolean | MantineSize;
  outerSpaceRightMd?: boolean | MantineSize;
  outerSpaceRightLg?: boolean | MantineSize;
  outerSpaceRightXl?: boolean | MantineSize;
}

export interface InnerSpaceResponsiveProps {
  innerSpace?: boolean | MantineSize;
  innerSpaceXs?: boolean | MantineSize;
  innerSpaceSm?: boolean | MantineSize;
  innerSpaceMd?: boolean | MantineSize;
  innerSpaceLg?: boolean | MantineSize;
  innerSpaceXl?: boolean | MantineSize;
  innerSpaceTop?: boolean | MantineSize;
  innerSpaceTopXs?: boolean | MantineSize;
  innerSpaceTopSm?: boolean | MantineSize;
  innerSpaceTopMd?: boolean | MantineSize;
  innerSpaceTopLg?: boolean | MantineSize;
  innerSpaceTopXl?: boolean | MantineSize;
  innerSpaceBottom?: boolean | MantineSize;
  innerSpaceBottomXs?: boolean | MantineSize;
  innerSpaceBottomSm?: boolean | MantineSize;
  innerSpaceBottomMd?: boolean | MantineSize;
  innerSpaceBottomLg?: boolean | MantineSize;
  innerSpaceBottomXl?: boolean | MantineSize;
  innerSpaceLeft?: boolean | MantineSize;
  innerSpaceLeftXs?: boolean | MantineSize;
  innerSpaceLeftSm?: boolean | MantineSize;
  innerSpaceLeftMd?: boolean | MantineSize;
  innerSpaceLeftLg?: boolean | MantineSize;
  innerSpaceLeftXl?: boolean | MantineSize;
  innerSpaceRight?: boolean | MantineSize;
  innerSpaceRightXs?: boolean | MantineSize;
  innerSpaceRightSm?: boolean | MantineSize;
  innerSpaceRightMd?: boolean | MantineSize;
  innerSpaceRightLg?: boolean | MantineSize;
  innerSpaceRightXl?: boolean | MantineSize;
}

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

export interface ResponsiveSizeProps {
  size?: MantineSize;
  sizeXs?: MantineSize;
  sizeSm?: MantineSize;
  sizeMd?: MantineSize;
  sizeLg?: MantineSize;
  sizeXl?: MantineSize;
}

export interface GapResponsiveProps {
  gap?: boolean | MantineSize;
  gapXs?: boolean | MantineSize;
  gapSm?: boolean | MantineSize;
  gapMd?: boolean | MantineSize;
  gapLg?: boolean | MantineSize;
  gapXl?: boolean | MantineSize;
}

export interface BlockProps
  extends WidthResponsiveProps,
    HeightResponsiveProps,
    ColsResponsiveProps,
    SpaceResponsiveProps,
    InnerSpaceResponsiveProps,
    RowResponsiveProps,
    ColResponsiveProps,
    GapResponsiveProps {
  border?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderTop?: boolean;
  bottom?: boolean;
  center?: boolean;
  children?: ReactNode;
  className?: string;
  column?: boolean;
  compact?: boolean;
  component?: ElementType;
  cozy?: boolean;
  fill?: boolean;
  inverse?: boolean;
  left?: boolean;
  middle?: boolean;
  onClick?: () => void;
  right?: boolean;
  secondary?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
