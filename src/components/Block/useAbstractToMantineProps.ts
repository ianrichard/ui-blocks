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
  "cols",
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
  "col",
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

  let backgroundColor: ColorInputProp = undefined;
  let textColor: ColorInputProp = undefined;
  if (props.backgroundInverse) {
    backgroundColor = "blue.6";
    textColor = "white";
  } else if (props.backgroundSecondary) {
    backgroundColor = "gray.1";
    textColor = "black";
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
      const colProp = bpKey ? `col${bpKey}` : "col";
      if (props[rowProp]) return "row";
      if (props[colProp]) return "column";
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
    className: userClassName,
    border,
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    blockExtraClassName,
    ...passthroughProps
  } = nonResponsiveProps;

  const flexDirectionRaw = resolveResponsiveDirection();
  let component;
  let display;

  if (flexDirectionRaw === "row" || flexDirectionRaw === "column") {
    component = Flex;
    display = "flex";
  } else {
    component = Box;
    display = "block";
  }

  let flexDirection = flexDirectionRaw;
  if (display === "flex" && !flexDirection) {
    flexDirection = "row";
  }

  const flexAlign =
    flexDirection === "row" && props.middle ? "center" : undefined;

  const flex = props.fill ? 1 : undefined;

  const outerSpaceTopBottom = props.verticalSpace
    ? typeof props.verticalSpace === "string"
      ? props.verticalSpace
      : "xl"
    : undefined;

  const mergedClassName = classNames(
    styles.blockBase,
    blockExtraClassName as string | undefined,
    userClassName as string | undefined,
    {
      [styles.border]: border,
      [styles.borderLeft]: borderLeft,
      [styles.borderRight]: borderRight,
      [styles.borderTop]: borderTop,
      [styles.borderBottom]: borderBottom,
      [styles.block]: display === "block",
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
    cols: resolveResponsiveProp("cols"),
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
