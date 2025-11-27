import type { MantineSpacing } from "@mantine/core";
import { useBreakpointMatches } from "./useBreakpointMatches";
import { mantineSizes } from "../Size/resolveSizeProp";
import { useSizeProp } from "../Size/useSizeProp";

const RESPONSIVE_BASES = [
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

function getAllResponsiveKeys() {
  const keys: string[] = [];
  for (const base of RESPONSIVE_BASES) {
    for (const bp of BREAKPOINTS) {
      keys.push(bp ? `${base}${bp}` : base);
    }
  }
  return keys;
}

export function useResponsiveProps<Props extends Record<string, unknown>>(
  props: Props
) {
  const matches = useBreakpointMatches();
  const responsiveKeys = getAllResponsiveKeys();
  const resolvedSize = useSizeProp(props);

  function resolveResponsiveProp(base: string) {
    let highestActive = 0;
    for (let i = matches.length - 1; i >= 0; i--) {
      if (matches[i].matches) {
        highestActive = i;
        break;
      }
    }
    for (let i = highestActive; i >= 0; i--) {
      const bpKey = matches[i].key;
      const propName = bpKey ? `${base}${bpKey}` : base;
      if (props[propName] !== undefined) return props[propName];
    }
    return undefined;
  }

  function resolveGapProp() {
    let highestActive = 0;
    for (let i = matches.length - 1; i >= 0; i--) {
      if (matches[i].matches) {
        highestActive = i;
        break;
      }
    }
    for (let i = highestActive; i >= 0; i--) {
      const bpKey = matches[i].key;
      const propName = bpKey ? `gap${bpKey}` : "gap";
      const value = props[propName];
      if (typeof value === "string") return value;
      if (value === true) {
        return resolvedSize;
      }
    }
    return undefined;
  }

  function resolveResponsiveDirection() {
    let highestActive = 0;
    for (let i = matches.length - 1; i >= 0; i--) {
      if (matches[i].matches) {
        highestActive = i;
        break;
      }
    }
    for (let i = highestActive; i >= 0; i--) {
      const bpKey = matches[i].key;
      const rowProp = bpKey ? `row${bpKey}` : "row";
      const colProp = bpKey ? `col${bpKey}` : "col";
      if (props[rowProp]) return "row";
      if (props[colProp]) return "column";
    }
    return undefined;
  }

  function resolveSpaceProp(base: string) {
    const value = resolveResponsiveProp(base);
    if (value === true) return resolvedSize;
    return value;
  }

  // Remove all responsive keys from props for spreading
  const otherProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !responsiveKeys.includes(key))
  );

  return {
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
    innerSpace: resolveSpaceProp("innerSpace"),
    innerSpaceTop: resolveSpaceProp("innerSpaceTop"),
    innerSpaceBottom: resolveSpaceProp("innerSpaceBottom"),
    innerSpaceLeft: resolveSpaceProp("innerSpaceLeft"),
    innerSpaceRight: resolveSpaceProp("innerSpaceRight"),
    gap: resolveGapProp(),
    flexDirection: resolveResponsiveDirection(),
    otherProps,
  } as {
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
    height?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
    cols?: number;
    outerSpace?: MantineSpacing;
    outerSpaceTop?: MantineSpacing;
    outerSpaceBottom?: MantineSpacing;
    outerSpaceLeft?: MantineSpacing;
    outerSpaceRight?: MantineSpacing;
    innerSpace?: MantineSpacing;
    innerSpaceTop?: MantineSpacing;
    innerSpaceBottom?: MantineSpacing;
    innerSpaceLeft?: MantineSpacing;
    innerSpaceRight?: MantineSpacing;
    gap?: MantineSpacing;
    flexDirection?: "row" | "column";
    otherProps: Record<string, unknown>;
  };
}
