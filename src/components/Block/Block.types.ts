import type { ReactNode, ElementType } from "react";
import type { MantineSize, MantineSpacing } from "@mantine/core";

export type AlignmentInputProp = boolean;
export type BorderInputProp = boolean;
export type BorderMappedProp = BorderInputProp;
export type ColorInputProp = string | undefined;
export type ColorMappedProp = ColorInputProp | undefined;
export type ColumnInputProp = boolean;
export type ColumnsInputProp = number;
export type ColumnsMappedProp = ColumnsInputProp;
export type FlexDirectionMappedProp = "row" | "column" | undefined;
export type GapInputProp = boolean | MantineSize;
export type GapMappedProp = MantineSize;
export type HeightInputProp = string | number;
export type HeightMappedProp = HeightInputProp;
export type RowInputProp = boolean;
export type SizeInputProp = MantineSize;
export type SpaceInputProp = boolean | MantineSpacing;
export type SpaceMappedProp = MantineSpacing;
export type WidthInputProp = string | number;
export type WidthMappedProp = WidthInputProp;
export type FlexAlignMappedProp =
  | "center"
  | "start"
  | "end"
  | "stretch"
  | "baseline"
  | undefined;
export type FlexMappedProp = number | undefined;
export type ComponentMappedProp = React.ElementType;

export interface WidthInputProps {
  width?: WidthInputProp;
  widthXs?: WidthInputProp;
  widthSm?: WidthInputProp;
  widthMd?: WidthInputProp;
  widthLg?: WidthInputProp;
  widthXl?: WidthInputProp;
  minWidth?: WidthInputProp;
  minWidthXs?: WidthInputProp;
  minWidthSm?: WidthInputProp;
  minWidthMd?: WidthInputProp;
  minWidthLg?: WidthInputProp;
  minWidthXl?: WidthInputProp;
  maxWidth?: WidthInputProp;
  maxWidthXs?: WidthInputProp;
  maxWidthSm?: WidthInputProp;
  maxWidthMd?: WidthInputProp;
  maxWidthLg?: WidthInputProp;
  maxWidthXl?: WidthInputProp;
}

export interface HeightInputProps {
  height?: HeightInputProp;
  heightXs?: HeightInputProp;
  heightSm?: HeightInputProp;
  heightMd?: HeightInputProp;
  heightLg?: HeightInputProp;
  heightXl?: HeightInputProp;
  minHeight?: HeightInputProp;
  minHeightXs?: HeightInputProp;
  minHeightSm?: HeightInputProp;
  minHeightMd?: HeightInputProp;
  minHeightLg?: HeightInputProp;
  minHeightXl?: HeightInputProp;
  maxHeight?: HeightInputProp;
  maxHeightXs?: HeightInputProp;
  maxHeightSm?: HeightInputProp;
  maxHeightMd?: HeightInputProp;
  maxHeightLg?: HeightInputProp;
  maxHeightXl?: HeightInputProp;
}

export interface ColsInputProps {
  cols?: ColumnsInputProp;
  colsXs?: ColumnsInputProp;
  colsSm?: ColumnsInputProp;
  colsMd?: ColumnsInputProp;
  colsLg?: ColumnsInputProp;
  colsXl?: ColumnsInputProp;
}

export interface SpaceInputProps {
  outerSpace?: SpaceInputProp;
  outerSpaceXs?: SpaceInputProp;
  outerSpaceSm?: SpaceInputProp;
  outerSpaceMd?: SpaceInputProp;
  outerSpaceLg?: SpaceInputProp;
  outerSpaceXl?: SpaceInputProp;
  outerSpaceTop?: SpaceInputProp;
  outerSpaceTopXs?: SpaceInputProp;
  outerSpaceTopSm?: SpaceInputProp;
  outerSpaceTopMd?: SpaceInputProp;
  outerSpaceTopLg?: SpaceInputProp;
  outerSpaceTopXl?: SpaceInputProp;
  outerSpaceBottom?: SpaceInputProp;
  outerSpaceBottomXs?: SpaceInputProp;
  outerSpaceBottomSm?: SpaceInputProp;
  outerSpaceBottomMd?: SpaceInputProp;
  outerSpaceBottomLg?: SpaceInputProp;
  outerSpaceBottomXl?: SpaceInputProp;
  outerSpaceLeft?: SpaceInputProp;
  outerSpaceLeftXs?: SpaceInputProp;
  outerSpaceLeftSm?: SpaceInputProp;
  outerSpaceLeftMd?: SpaceInputProp;
  outerSpaceLeftLg?: SpaceInputProp;
  outerSpaceLeftXl?: SpaceInputProp;
  outerSpaceRight?: SpaceInputProp;
  outerSpaceRightXs?: SpaceInputProp;
  outerSpaceRightSm?: SpaceInputProp;
  outerSpaceRightMd?: SpaceInputProp;
  outerSpaceRightLg?: SpaceInputProp;
  outerSpaceRightXl?: SpaceInputProp;
}

export interface InnerSpaceInputProps {
  innerSpace?: SpaceInputProp;
  innerSpaceXs?: SpaceInputProp;
  innerSpaceSm?: SpaceInputProp;
  innerSpaceMd?: SpaceInputProp;
  innerSpaceLg?: SpaceInputProp;
  innerSpaceXl?: SpaceInputProp;
  innerSpaceTop?: SpaceInputProp;
  innerSpaceTopXs?: SpaceInputProp;
  innerSpaceTopSm?: SpaceInputProp;
  innerSpaceTopMd?: SpaceInputProp;
  innerSpaceTopLg?: SpaceInputProp;
  innerSpaceTopXl?: SpaceInputProp;
  innerSpaceBottom?: SpaceInputProp;
  innerSpaceBottomXs?: SpaceInputProp;
  innerSpaceBottomSm?: SpaceInputProp;
  innerSpaceBottomMd?: SpaceInputProp;
  innerSpaceBottomLg?: SpaceInputProp;
  innerSpaceBottomXl?: SpaceInputProp;
  innerSpaceLeft?: SpaceInputProp;
  innerSpaceLeftXs?: SpaceInputProp;
  innerSpaceLeftSm?: SpaceInputProp;
  innerSpaceLeftMd?: SpaceInputProp;
  innerSpaceLeftLg?: SpaceInputProp;
  innerSpaceLeftXl?: SpaceInputProp;
  innerSpaceRight?: SpaceInputProp;
  innerSpaceRightXs?: SpaceInputProp;
  innerSpaceRightSm?: SpaceInputProp;
  innerSpaceRightMd?: SpaceInputProp;
  innerSpaceRightLg?: SpaceInputProp;
  innerSpaceRightXl?: SpaceInputProp;
}

export interface RowInputProps {
  row?: RowInputProp;
  rowXs?: RowInputProp;
  rowSm?: RowInputProp;
  rowMd?: RowInputProp;
  rowLg?: RowInputProp;
  rowXl?: RowInputProp;
}

export interface ColInputProps {
  col?: ColumnInputProp;
  colXs?: ColumnInputProp;
  colSm?: ColumnInputProp;
  colMd?: ColumnInputProp;
  colLg?: ColumnInputProp;
  colXl?: ColumnInputProp;
}

export interface SizeInputProps {
  size?: SizeInputProp;
  sizeXs?: SizeInputProp;
  sizeSm?: SizeInputProp;
  sizeMd?: SizeInputProp;
  sizeLg?: SizeInputProp;
  sizeXl?: SizeInputProp;
}

export interface GapInputProps {
  gap?: GapInputProp;
  gapXs?: GapInputProp;
  gapSm?: GapInputProp;
  gapMd?: GapInputProp;
  gapLg?: GapInputProp;
  gapXl?: GapInputProp;
}

export interface BlockInputProps
  extends WidthInputProps,
    HeightInputProps,
    ColsInputProps,
    SpaceInputProps,
    InnerSpaceInputProps,
    RowInputProps,
    ColInputProps,
    GapInputProps {
  alignBottom?: AlignmentInputProp;
  alignCenter?: AlignmentInputProp;
  alignLeft?: AlignmentInputProp;
  alignMiddle?: AlignmentInputProp;
  alignRight?: AlignmentInputProp;
  backgroundInverse?: boolean;
  backgroundSecondary?: boolean;
  border?: BorderInputProp;
  borderBottom?: BorderInputProp;
  borderLeft?: BorderInputProp;
  borderRight?: BorderInputProp;
  borderTop?: BorderInputProp;
  children?: ReactNode;
  className?: string | undefined;
  component?: ElementType;
  fill?: boolean;
  onClick?: () => void;
  sizeCompact?: boolean;
  sizeCozy?: boolean;
  textColor?: ColorInputProp;
  [key: string]: unknown;
}

export type BlockMappedProps = {
  backgroundColor?: ColorMappedProp;
  className: string;
  cols?: ColumnsMappedProp;
  component: ComponentMappedProp;
  display?: string;
  flex?: number;
  flexAlign?: FlexAlignMappedProp;
  flexDirection?: FlexDirectionMappedProp;
  gap?: GapMappedProp;
  height?: HeightMappedProp;
  innerSpace?: SpaceMappedProp;
  innerSpaceBottom?: SpaceMappedProp;
  innerSpaceLeft?: SpaceMappedProp;
  innerSpaceRight?: SpaceMappedProp;
  innerSpaceTop?: SpaceMappedProp;
  maxHeight?: HeightMappedProp;
  maxWidth?: WidthMappedProp;
  minHeight?: HeightMappedProp;
  minWidth?: WidthMappedProp;
  otherProps: Record<string, unknown>;
  outerSpace?: SpaceMappedProp;
  outerSpaceBottom?: SpaceMappedProp;
  outerSpaceLeft?: SpaceMappedProp;
  outerSpaceRight?: SpaceMappedProp;
  outerSpaceTop?: SpaceMappedProp;
  outerSpaceTopBottom?: SpaceMappedProp;
  textColor?: ColorMappedProp;
  width?: WidthMappedProp;
};
