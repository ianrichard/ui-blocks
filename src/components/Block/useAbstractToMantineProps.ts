import { useBreakpointContext } from "./useBreakpointContext";
import { useSizeProp } from "../Size/useSizeProp";
import { Box, Flex } from "@mantine/core";
import type { BlockMappedProps, ColorInputProp } from "./Block.types";
import classNames from "classnames";
import styles from "./Block.module.scss";
import { responsivePropNames } from "./responsivePropNames";
import { useMemo } from "react";
import { BREAKPOINTS } from "./useBreakpointsState";

const breakpointSuffixes = BREAKPOINTS.map(
  (bp) => bp.key.charAt(0).toUpperCase() + bp.key.slice(1)
);

export function useAbstractToMantineProps<
  Props extends Record<string, unknown>
>(props: Props) {
  const { activeBreakpoints } = useBreakpointContext();
  console.log(activeBreakpoints);
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
  }, [props]);

  const resolvedSize = useSizeProp(props);

  function resolveResponsiveProp(base: string) {
    const used = responsivePropsUsed[base];
    if (!used) return undefined;
    // activeBreakpoints is ordered highest to lowest
    for (const key of activeBreakpoints) {
      if (used.includes(key)) {
        const propName = key
          ? `${base}${key.charAt(0).toUpperCase()}${key.slice(1)}`
          : base;
        if (props[propName] !== undefined) return props[propName];
      }
    }
    // fallback to base
    if (used.includes("base") && props[base] !== undefined) return props[base];
    return undefined;
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

  const nonResponsiveProps = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(props).filter(
          ([key]) => !responsivePropNames.includes(key)
        )
      ),
    [props]
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
