import type { ReactNode, ElementType } from "react";

export type SizeValues = "xs" | "sm" | "md" | "lg" | "xl";
export type SpaceValues = SizeValues | number;

// Alignment and Border types
export type AlignmentInputProp = boolean;
export type BorderInputProp = boolean;

// Color types
export type ColorInputProp = string | undefined;
export type ColorMappedProp = ColorInputProp | undefined;

// Column and Row types
export type ColumnInputProp = boolean;
export type ColumnsInputProp = number;
export type ColumnsMappedProp = ColumnsInputProp;
export type RowInputProp = boolean | undefined;

// Flex types
export type FlexAlignMappedProp =
  | "center"
  | "start"
  | "end"
  | "stretch"
  | "baseline"
  | undefined;
export type FlexDirectionMappedProp = "row" | "column" | undefined;
export type FlexMappedProp = number | undefined;

// Gap types
export type GapInputProp = boolean | SpaceValues;
export type GapMappedProp = SpaceValues;

// Height and Width types
export type HeightInputProp = string | number | undefined;
export type HeightMappedProp = HeightInputProp;
export type WidthInputProp = string | number;
export type WidthMappedProp = WidthInputProp;

// Size types
export type SizeInputProp = SizeValues | undefined;
export type SizeMappedProp = SizeInputProp;
export type SizeAliasInputProp = boolean;

// Space types
export type SpaceInputProp = boolean | SpaceValues;
export type SpaceMappedProp = SpaceValues;

// Component and Background types
export type ComponentMappedProp = React.ElementType;
export type BackgroundMappedProp = "secondary" | "inverse" | undefined;

// Frost types
export type FrostInputProp = boolean | SizeValues;

// Responsive prop utility types
// Used to generate prop types for responsive variants (e.g., widthMd, gapXl)
type Breakpoint = "" | "Xs" | "Sm" | "Md" | "Lg" | "Xl";
type ResponsiveProps<ValueType, PropPrefix extends string> = {
  [BreakpointKey in Breakpoint as `${PropPrefix}${BreakpointKey}`]?: ValueType;
} & { [key: string]: unknown };

// Directional prop utility types
// Used for props like outerSpaceTop, innerSpaceLeft, etc.
type Direction = "" | "Top" | "Bottom" | "Left" | "Right";
type DirectionalProps<ValueType, PropPrefix extends string> = {
  [DirectionKey in Direction as `${PropPrefix}${DirectionKey}`]?: ValueType;
} & {
  [Key in `${PropPrefix}${Direction}${Exclude<Breakpoint, "">}`]?: ValueType;
};

// Outer/Inner space directional types
export type OuterSpaceDirectionalProps = DirectionalProps<
  SpaceInputProp,
  "outerSpace"
>;
export type InnerSpaceDirectionalProps = DirectionalProps<
  SpaceInputProp,
  "innerSpace"
>;

// Responsive prop types for various props
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
export type SizeInputProps = ResponsiveProps<SizeInputProp, "size">;
export type GapInputProps = ResponsiveProps<GapInputProp, "gap">;
export type ChildrenResponsiveProps = ResponsiveProps<ReactNode, "children">;
export type WrapInputProp = boolean | undefined;
export type WrapInputProps = ResponsiveProps<WrapInputProp, "wrap">;

// Main Block input props interface
export interface BlockInputProps
  extends WidthInputProps,
    HeightInputProps,
    ColumnsInputProps,
    SpaceInputProps,
    InnerSpaceInputProps,
    RowInputProps,
    ColumnInputProps,
    GapInputProps,
    ChildrenResponsiveProps,
    SizeInputProps,
    WrapInputProps {
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
  sizeCompact?: SizeAliasInputProp;
  sizeCozy?: SizeAliasInputProp;
  sticky?: boolean;
  frost?: FrostInputProp;
  background?: boolean;
  backgroundImage?: string;
}

// Mapped props returned from useAbstractProps
export type BlockMappedProps = {
  backgroundVariant?: BackgroundMappedProp;
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
  innerSpaceTop?: SpaceMappedProp;
  innerSpaceBottom?: SpaceMappedProp;
  innerSpaceLeft?: SpaceMappedProp;
  innerSpaceRight?: SpaceMappedProp;
  innerSpaceTopBottom?: SpaceMappedProp;
  innerSpaceLeftRight?: SpaceMappedProp;
  maxHeight?: HeightMappedProp;
  maxWidth?: WidthMappedProp;
  minHeight?: HeightMappedProp;
  minWidth?: WidthMappedProp;
  otherProps: Record<string, unknown>;
  outerSpace?: SpaceMappedProp;
  outerSpaceTop?: SpaceMappedProp;
  outerSpaceBottom?: SpaceMappedProp;
  outerSpaceLeft?: SpaceMappedProp;
  outerSpaceRight?: SpaceMappedProp;
  outerSpaceTopBottom?: SpaceMappedProp;
  outerSpaceLeftRight?: SpaceMappedProp;
  size?: SizeMappedProp;
  width?: WidthMappedProp;
  wrap?: WrapInputProp;
};

// Context value for BlockProvider
export type BlockContextValue = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  backgroundVariant?: BackgroundMappedProp;
};
