import { Box, Flex } from "@mantine/core";
import classNames from "classnames";
import { useMemo } from "react";
import styles from "./Block.module.scss";
import type { BlockMappedProps, ColorInputProp } from "./Block.types";
import { useResponsiveProps } from "./useResponsiveProps";
import {
  useScaleFromPropOrContext,
  useSizeFromPropOrContext,
} from "./useBlockContext";
import { EXCLUDED_KEYS } from "./blockConstants";

export function useAbstractToMantineProps<
  Props extends Record<string, unknown>
>(props: Props) {
  const resolvedProps = useResponsiveProps(props);

  const sizeFromPropOrContext = useSizeFromPropOrContext(resolvedProps);
  const scaleFrompPropOrContext = useScaleFromPropOrContext(resolvedProps);

  function resolveSpaceProp(base: string) {
    const value = resolvedProps[base];
    if (["string", "number"].includes(typeof value)) return value;
    if (value === true) {
      if (sizeFromPropOrContext) return sizeFromPropOrContext;
      if (scaleFrompPropOrContext) return scaleFrompPropOrContext;
      return "md";
    }
  }

  function resolveResponsiveDirection() {
    if (resolvedProps["row"]) return "row";
    if (resolvedProps["column"]) return "column";
    return undefined;
  }

  const nonResponsiveProps = useMemo(() => {
    const filtered = Object.fromEntries(
      Object.entries(resolvedProps).filter(([key]) => !EXCLUDED_KEYS.has(key))
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
    fillSpace: fillSpaceProp,
    component: componentProp,
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

  let backgroundVariant: ColorInputProp = undefined;
  if (backgroundInverseProp) {
    backgroundVariant = "inverse";
  } else if (backgroundSecondaryProp) {
    backgroundVariant = "secondary";
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
    outerSpaceTopBottom: resolveSpaceProp("outerSpaceTopBottom"),
    outerSpaceLeftRight: resolveSpaceProp("outerSpaceLeftRight"),
    innerSpace: resolveSpaceProp("innerSpace"),
    innerSpaceTop: resolveSpaceProp("innerSpaceTop"),
    innerSpaceBottom: resolveSpaceProp("innerSpaceBottom"),
    innerSpaceLeft: resolveSpaceProp("innerSpaceLeft"),
    innerSpaceRight: resolveSpaceProp("innerSpaceRight"),
    innerSpaceTopBottom: resolveSpaceProp("innerSpaceTopBottom"),
    innerSpaceLeftRight: resolveSpaceProp("innerSpaceLeftRight"),
    gap: resolveSpaceProp("gap"),
    flexDirection,
    component,
    display,
    backgroundVariant,
    flexAlign,
    flex,
    scale: scaleFrompPropOrContext,
    size: sizeFromPropOrContext,
    otherProps: passthroughProps,
  } as BlockMappedProps;
}
