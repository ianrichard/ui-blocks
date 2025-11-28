import { BREAKPOINTS } from "../Breakpoints/breakpoints";
import { useBreakpointsContext } from "../Breakpoints/useBreakpointsContext";
import { useSizeProp } from "../Size/useSizeProp";
import { Box, Flex } from "@mantine/core";
import type { BlockMappedProps, ColorInputProp } from "./Block.types";
import classNames from "classnames";
import styles from "./Block.module.scss";
import { useMemo } from "react";
import { RESPONSIVE_PROP_NAMES } from "./responsivePropNames";

const RESPONSIVE_PROPS_SUFFIXES = BREAKPOINTS.map(
  (breakpoint) =>
    breakpoint.key.charAt(0).toUpperCase() + breakpoint.key.slice(1)
);

function getResponsivePropsForAttribute(props: Record<string, unknown>) {
  const responsivePropsForAttribute: Record<string, string[]> = {};
  RESPONSIVE_PROP_NAMES.forEach((name) => {
    if (props[name] !== undefined) {
      const matchedSuffix = RESPONSIVE_PROPS_SUFFIXES.find((suffix) =>
        name.endsWith(suffix)
      );
      if (matchedSuffix) {
        const base = name.slice(0, -matchedSuffix.length);
        const suffix = matchedSuffix.toLowerCase();
        if (!responsivePropsForAttribute[base])
          responsivePropsForAttribute[base] = [];
        responsivePropsForAttribute[base].push(suffix);
      } else {
        if (!responsivePropsForAttribute[name])
          responsivePropsForAttribute[name] = [];
        responsivePropsForAttribute[name].push("base");
      }
    }
  });
  return responsivePropsForAttribute;
}

export function useAbstractToMantineProps<
  Props extends Record<string, unknown>
>(props: Props) {
  const { activeBreakpoints } = useBreakpointsContext();
  const cachedResponsiveProps = useMemo(
    () => getResponsivePropsForAttribute(props),
    [props]
  );

  const resolvedSize = useSizeProp(props);

  function resolveResponsiveProp(propWithoutResponsiveSuffix: string) {
    const responsivePropsForAttribute =
      cachedResponsiveProps[propWithoutResponsiveSuffix];
    if (!responsivePropsForAttribute) return undefined;
    for (let i = activeBreakpoints.length - 1; i >= 0; i--) {
      const key = activeBreakpoints[i];
      if (responsivePropsForAttribute.includes(key)) {
        const propName = key
          ? `${propWithoutResponsiveSuffix}${key
              .charAt(0)
              .toUpperCase()}${key.slice(1)}`
          : propWithoutResponsiveSuffix;
        if (props[propName] !== undefined) return props[propName];
      }
    }
    if (
      responsivePropsForAttribute.includes("base") &&
      props[propWithoutResponsiveSuffix] !== undefined
    )
      return props[propWithoutResponsiveSuffix];
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

  const nonResponsiveProps = useMemo(() => {
    const filtered = Object.fromEntries(
      Object.entries(props).filter(
        ([key]) =>
          !RESPONSIVE_PROP_NAMES.includes(key) &&
          key !== "sizeCozy" &&
          key !== "sizeCompact"
      )
    );
    return filtered;
  }, [props]);

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
    flexDirection === "row" && alignMiddleProp ? "center" : undefined;

  const flex = fillProp ? 1 : undefined;

  const outerSpaceTopBottom = verticalSpaceProp
    ? typeof verticalSpaceProp === "string"
      ? verticalSpaceProp
      : "xl"
    : undefined;

  let backgroundColor: ColorInputProp = undefined;
  //   let textColor: ColorInputProp = undefined;
  if (backgroundInverseProp) {
    backgroundColor = "inverse";
    // textColor = "white";
  } else if (backgroundSecondaryProp) {
    backgroundColor = "secondary";
    // textColor = "black";
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
    // textColor,
    otherProps: passthroughProps,
    flexAlign,
    flex,
    size: resolvedSize,
  } as BlockMappedProps;
}
