import { useBreakpointMatches } from "./useBreakpointMatches";
import { mantineSizes } from "../Size/resolveSizeProp";
import { useSizeProp } from "../Size/useSizeProp";
import { Box, Flex } from "@mantine/core";
import type { BlockMappedProps, ColorInputProp } from "./Block.types";
import classNames from "classnames";
import styles from "./Block.module.scss";

const RESPONSIVE_PREFIXES = [
  "width",
  "minWidth",
  "maxWidth",
  "height",
  "minHeight",
  "maxHeight",
  "columns",
  "outerSpace",
  "outerSpaceTop",
  "outerSpaceBottom",
  "outerSpaceLeft",
  "outerSpaceRight",
  "innerSpace",
  "innerSpaceTop",
  "innerSpaceBottom",
  "innerSpaceLeft",
  "innerSpaceRight",
  "row",
  "column",
  "gap",
];

const BREAKPOINTS = [
  "",
  ...mantineSizes.map((s) => s.charAt(0).toUpperCase() + s.slice(1)),
];

function getHighestActiveBreakpoint(matches: { matches: boolean }[]) {
  for (let i = matches.length - 1; i >= 0; i--) {
    if (matches[i].matches) {
      return i;
    }
  }
  return 0;
}

function getAllResponsiveKeys() {
  const keys: string[] = [];
  for (const base of RESPONSIVE_PREFIXES) {
    for (const bp of BREAKPOINTS) {
      keys.push(bp ? `${base}${bp}` : base);
    }
  }
  return keys;
}

export function useAbstractToMantineProps<
  Props extends Record<string, unknown>
>(props: Props) {
  const matches = useBreakpointMatches();
  const highestActive = getHighestActiveBreakpoint(matches);
  const responsiveKeys = getAllResponsiveKeys();
  const resolvedSize = useSizeProp(props);

  function iterateBreakpoints<T>(
    handler: (bpKey: string) => T | undefined
  ): T | undefined {
    for (let i = highestActive; i >= 0; i--) {
      const bpKey = matches[i].key;
      const result = handler(bpKey);
      if (result !== undefined) return result;
    }
    return undefined;
  }

  function resolveResponsiveProp(base: string) {
    return iterateBreakpoints((bpKey) => {
      const propName = bpKey ? `${base}${bpKey}` : base;
      if (props[propName] !== undefined) return props[propName];
    });
  }

  function resolveGapProp() {
    return iterateBreakpoints((bpKey) => {
      const propName = bpKey ? `gap${bpKey}` : "gap";
      const value = props[propName];
      if (typeof value === "string") return value;
      if (value === true) return resolvedSize;
    });
  }

  function resolveResponsiveDirection() {
    return iterateBreakpoints((bpKey) => {
      const rowProp = bpKey ? `row${bpKey}` : "row";
      const columnProp = bpKey ? `column${bpKey}` : "column";
      if (props[rowProp]) return "row";
      if (props[columnProp]) return "column";
      return undefined;
    });
  }

  function resolveSpaceProp(base: string) {
    const value = resolveResponsiveProp(base);
    if (value === true) return resolvedSize;
    return value;
  }

  const nonResponsiveProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !responsiveKeys.includes(key))
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

  if (props.component) {
    console.log(flexDirection);
  }

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
