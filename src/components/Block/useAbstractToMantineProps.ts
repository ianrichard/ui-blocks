import { Box, Flex } from "@mantine/core";
import classNames from "classnames";
import { useMemo } from "react";
import { useSizeProp } from "../Size/useSizeProp";
import styles from "./Block.module.scss";
import type { BlockMappedProps, ColorInputProp } from "./Block.types";
import { RESPONSIVE_PROP_NAMES } from "./responsivePropNames";
import { useResponsiveProps } from "./useResponsiveProps";

export function useAbstractToMantineProps<
  Props extends Record<string, unknown>
>(props: Props) {
  // Use the new generic responsive prop resolver
  const resolvedProps = useResponsiveProps(props);

  const textSize = useSizeProp(resolvedProps);

  function getScaleSize(defaultValue: boolean | unknown) {
    if (defaultValue) {
      return textSize;
    } else {
      return "md";
    }
  }

  function resolveGapProp() {
    const value = resolvedProps["gap"];
    if (typeof value === "string") return value;
    if (value === true) return getScaleSize(value);
    return value;
  }

  function resolveResponsiveDirection() {
    if (resolvedProps["row"]) return "row";
    if (resolvedProps["column"]) return "column";
    return undefined;
  }

  function resolveSpaceProp(base: string) {
    const value = resolvedProps[base];
    if (typeof value === "string") return value;
    if (value === true) return getScaleSize(value);
    return value;
  }

  // Remove responsive props from passthrough
  const nonResponsiveProps = useMemo(() => {
    const filtered = Object.fromEntries(
      Object.entries(resolvedProps).filter(
        ([key]) =>
          !RESPONSIVE_PROP_NAMES.includes(key) &&
          key !== "scaleCozy" &&
          key !== "scaleCompact"
      )
    );
    return filtered;
  }, [resolvedProps]);

  const {
    className: classNameProp,
    backgroundInverse: backgroundInverseProp,
    backgroundSecondary: backgroundSecondaryProp,
    border: borderProp,
    borderLeft: borderLeftProp,
    borderRight: borderRightProp,
    borderTop: borderTopProp,
    borderBottom: borderBottomProp,
    alignMiddle: alignMiddleProp,
    verticalSpace: verticalSpaceProp,
    fillSpace: fillSpaceProp,
    component: componentProp,
    // textSize: textSizeProp,
    ...passthroughProps
  } = nonResponsiveProps;

  const flexDirection = resolveResponsiveDirection();
  let component;
  let display = "block";

  if (flexDirection === "row" || flexDirection === "column") {
    display = "flex";
  }

  if (componentProp) {
    component = componentProp;
  } else if (!componentProp && display === "flex") {
    component = Flex;
  } else {
    component = Box;
  }

  const flexAlign =
    flexDirection === "row" && alignMiddleProp ? "center" : undefined;

  const flex = fillSpaceProp ? 1 : undefined;

  const outerSpaceTopBottom = verticalSpaceProp
    ? typeof verticalSpaceProp === "string"
      ? verticalSpaceProp
      : "xl"
    : undefined;

  let backgroundColor: ColorInputProp = undefined;
  if (backgroundInverseProp) {
    backgroundColor = "inverse";
  } else if (backgroundSecondaryProp) {
    backgroundColor = "secondary";
  }

  const mergedClassName = classNames(
    styles.blockBase,
    classNameProp as string | undefined,
    {
      [styles.border]: borderProp,
      [styles.borderLeft]: borderLeftProp,
      [styles.borderRight]: borderRightProp,
      [styles.borderTop]: borderTopProp,
      [styles.borderBottom]: borderBottomProp,
      [styles.flex]: display === "flex",
      [styles.backgroundInverse]: backgroundInverseProp,
      [styles.backgroundSecondary]: backgroundSecondaryProp,
    }
  );

  return {
    className: mergedClassName,
    children: resolvedProps["children"],
    width: resolvedProps["width"],
    minWidth: resolvedProps["minWidth"],
    maxWidth: resolvedProps["maxWidth"],
    height: resolvedProps["height"],
    minHeight: resolvedProps["minHeight"],
    maxHeight: resolvedProps["maxHeight"],
    columns: resolvedProps["columns"],
    outerSpace: resolveSpaceProp("outerSpace"),
    outerSpaceTop: resolveSpaceProp("outerSpaceTop"),
    outerSpaceBottom: resolveSpaceProp("outerSpaceBottom"),
    outerSpaceLeft: resolveSpaceProp("outerSpaceLeft"),
    outerSpaceRight: resolveSpaceProp("outerSpaceRight"),
    outerSpaceTopBottom,
    innerSpace: resolveSpaceProp("innerSpace"),
    innerSpaceTop: resolveSpaceProp("innerSpaceTop"),
    innerSpaceBottom: resolveSpaceProp("innerSpaceBottom"),
    innerSpaceLeft: resolveSpaceProp("innerSpaceLeft"),
    innerSpaceRight: resolveSpaceProp("innerSpaceRight"),
    gap: resolveGapProp(),
    flexDirection,
    component,
    display,
    backgroundColor,
    // textColor,
    flexAlign,
    flex,
    textSize: textSize,
    otherProps: passthroughProps,
  } as BlockMappedProps;
}
