import { useBreakpointsContext } from "../Breakpoints/useBreakpointsContext";
import { BREAKPOINTS } from "./blockConstants";

export function useResponsiveProps<Props extends Record<string, unknown>>(
  props: Props
): Partial<Props> {
  const { activeBreakpoints } = useBreakpointsContext();
  // Build a map of breakpoint suffixes (e.g. 'Md', 'Xl')
  const breakpointSuffixes = BREAKPOINTS.map(
    (breakpoint) =>
      breakpoint.key.charAt(0).toUpperCase() + breakpoint.key.slice(1)
  );

  // For each prop, group by root name and collect all responsive variants
  const responsiveMap: Record<string, { [suffix: string]: string }> = {};
  Object.keys(props).forEach((propKey) => {
    const matchedSuffix = breakpointSuffixes.find((suffix) =>
      propKey.endsWith(suffix)
    );
    if (matchedSuffix) {
      const rootPropName = propKey.slice(0, -matchedSuffix.length);
      if (!responsiveMap[rootPropName]) responsiveMap[rootPropName] = {};
      responsiveMap[rootPropName][matchedSuffix.toLowerCase()] = propKey;
    } else {
      if (!responsiveMap[propKey]) responsiveMap[propKey] = {};
      responsiveMap[propKey]["base"] = propKey;
    }
  });

  // For each root prop, resolve the value for the highest active breakpoint
  const resolvedProps: Record<string, unknown> = {};
  Object.entries(responsiveMap).forEach(([rootPropName, variants]) => {
    // Check breakpoints from highest to lowest
    for (let i = activeBreakpoints.length - 1; i >= 0; i--) {
      const activeBreakpoint = activeBreakpoints[i];
      if (variants[activeBreakpoint]) {
        resolvedProps[rootPropName] = props[variants[activeBreakpoint]];
        return;
      }
    }
    // Fallback to base
    if (variants["base"] !== undefined) {
      resolvedProps[rootPropName] = props[variants["base"]];
    }
  });

  return resolvedProps as Partial<Props>;
}
