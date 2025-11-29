import type { ReactNode, ElementType } from "react";
import type {
  MantineFontSize,
  MantineSize,
  MantineSpacing,
} from "@mantine/core";

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
export type TextSizeInputProp = MantineFontSize;
export type TextSizemappedProp = TextSizeInputProp;
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
export type BackgroundMappedProp = "secondary" | "inverse";

export type SizeAliasInputProp = boolean;

type Breakpoint = "" | "Xs" | "Sm" | "Md" | "Lg" | "Xl";

type ResponsiveProps<T, K extends string> = {
  [B in Breakpoint as `${K}${B}`]?: T;
};

export type WidthInputProps = ResponsiveProps<WidthInputProp, "width"> & {
  minWidth?: WidthInputProp;
  maxWidth?: WidthInputProp;
};

export type HeightInputProps = ResponsiveProps<HeightInputProp, "height"> & {
  minHeight?: HeightInputProp;
  maxHeight?: HeightInputProp;
};

export type ColumnsInputProps = ResponsiveProps<ColumnsInputProp, "columns">;

export type SpaceInputProps = OuterSpaceDirectionalProps;
export type InnerSpaceInputProps = InnerSpaceDirectionalProps;

export type RowInputProps = ResponsiveProps<RowInputProp, "row">;

export type ColumnInputProps = ResponsiveProps<ColumnInputProp, "column">;

export type TextSizeInputProps = ResponsiveProps<TextSizeInputProp, "textSize">;

export type GapInputProps = ResponsiveProps<GapInputProp, "gap">;

export type ChildrenResponsiveProps = ResponsiveProps<ReactNode, "children">;

export interface BlockInputProps
  extends WidthInputProps,
    HeightInputProps,
    ColumnsInputProps,
    SpaceInputProps,
    InnerSpaceInputProps,
    RowInputProps,
    ColumnInputProps,
    GapInputProps,
    ChildrenResponsiveProps {
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
  fillSpace?: boolean;
  onClick?: () => void;
  scaleCompact?: SizeAliasInputProp;
  scaleCozy?: SizeAliasInputProp;
  //   textColor?: ColorInputProp;
  [key: string]: unknown;
}

export type BlockMappedProps = {
  backgroundColor?: ColorMappedProp;
  children?: ReactNode;
  className: string;
  columns?: ColumnsMappedProp;
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
  textSize?: TextSizemappedProp;
  width?: WidthMappedProp;
};

export type BlockContextValue = {
  textSize?: MantineFontSize;
  backgroundVariant?: BackgroundMappedProp;
};

type Direction = "" | "Top" | "Bottom" | "Left" | "Right";

type DirectionalProps<T, K extends string> = {
  [D in Direction as `${K}${D}`]?: T;
};

export type OuterSpaceDirectionalProps = DirectionalProps<
  SpaceInputProp,
  "outerSpace"
>;
export type InnerSpaceDirectionalProps = DirectionalProps<
  SpaceInputProp,
  "innerSpace"
>;
