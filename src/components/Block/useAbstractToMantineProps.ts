import { useBreakpointsState } from "./useBreakpointsState";

import { useSizeProp } from "../Size/useSizeProp";
import { Box, Flex } from "@mantine/core";
import type { BlockMappedProps, ColorInputProp } from "./Block.types";
import classNames from "classnames";
import styles from "./Block.module.scss";
import { useMemo } from "react";
import { getResponsivePropNames } from "./responsivePropNames";

export function useAbstractToMantineProps<
  Props extends Record<string, unknown>
>(props: Props) {
  const { breakpointsState, highestActiveIndex } = useBreakpointsState();

  const responsivePropNames = useMemo(() => getResponsivePropNames(), []);

  // List of valid breakpoint suffixes
  const breakpointSuffixes = ["Xs", "Sm", "Md", "Lg", "Xl"];

  const responsivePropsUsed = useMemo(() => {
    const used: Record<string, string[]> = {};
    responsivePropNames.forEach((name) => {
      if (props[name] !== undefined) {
        const matchedSuffix = breakpointSuffixes.find((suf) =>
          name.endsWith(suf)
        );
        if (matchedSuffix) {
          const base = name.slice(0, -matchedSuffix.length);
          const suffix = matchedSuffix.toLowerCase();
          if (!used[base]) used[base] = [];
          used[base].push(suffix);
        } else {
          if (!used[name]) used[name] = [];
          used[name].push("base");
        }
      }
    });
    return used;
  }, [props, responsivePropNames, breakpointSuffixes]);

  const resolvedSize = useSizeProp(props);

  console.log(responsivePropsUsed);

  function iterateBreakpoints<T>(
    handler: (breakpointKey: string) => T | undefined
  ): T | undefined {
    for (let i = highestActiveIndex; i >= 0; i--) {
      const breakpointKey = breakpointsState[i].key;
      const result = handler(breakpointKey);
      if (result !== undefined) return result;
    }
    return undefined;
  }

  function resolveResponsiveProp(base: string) {
    if (!responsivePropsUsed[base]) return undefined;
    return iterateBreakpoints((breakpointKey) => {
      const propName = breakpointKey ? `${base}${breakpointKey}` : base;
      if (props[propName] !== undefined) return props[propName];
    });
  }

  function resolveGapProp() {
    const value = resolveResponsiveProp("gap");
    if (typeof value === "string") return value;
    if (value === true) return resolvedSize;
    return value;
  }

  function resolveResponsiveDirection() {
    if (resolveResponsiveProp("row")) return "row";
    if (resolveResponsiveProp("column")) return "column";
    return undefined;
  }

  function resolveSpaceProp(base: string) {
    const value = resolveResponsiveProp(base);
    if (value === true) return resolvedSize;
    return value;
  }

  const nonResponsiveProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !responsivePropNames.includes(key))
  );

  const {
    className: classNameProp,
    backgroundInverse: backgroundInverseProp,
    backgroundSecondary: backgroundSecondaryProp,
    border: borderProp,
    borderLeft: borderLeftProp,
    borderRight: borderRightProp,
    borderTop: borderTopProp,
    borderBottom: borderBottomProp,
    middle: middleProp,
    verticalSpace: verticalSpaceProp,
    fill: fillProp,
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
    flexDirection === "row" && middleProp ? "center" : undefined;

  const flex = fillProp ? 1 : undefined;

  const outerSpaceTopBottom = verticalSpaceProp
    ? typeof verticalSpaceProp === "string"
      ? verticalSpaceProp
      : "xl"
    : undefined;

  let backgroundColor: ColorInputProp = undefined;
  let textColor: ColorInputProp = undefined;
  if (backgroundInverseProp) {
    backgroundColor = "blue.6";
    textColor = "white";
  } else if (backgroundSecondaryProp) {
    backgroundColor = "gray.1";
    textColor = "black";
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
    }
  );

  return {
    className: mergedClassName,
    width: resolveResponsiveProp("width"),
    minWidth: resolveResponsiveProp("minWidth"),
    maxWidth: resolveResponsiveProp("maxWidth"),
    height: resolveResponsiveProp("height"),
    minHeight: resolveResponsiveProp("minHeight"),
    maxHeight: resolveResponsiveProp("maxHeight"),
    columns: resolveResponsiveProp("columns"),
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
    textColor,
    otherProps: passthroughProps,
    flexAlign,
    flex,
  } as BlockMappedProps;
}
