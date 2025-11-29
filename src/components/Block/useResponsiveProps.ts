import { BREAKPOINTS } from "../Breakpoints/breakpoints";
import { useBreakpointsState } from "../Breakpoints/useBreakpointsState";

/**
 * Resolves responsive props for a component based on active breakpoints.
 * @param props The component props (may include responsive props like fooMd, barXl, etc)
 * @returns New props object with responsive props resolved to their root names
 */
export function useResponsiveProps<Props extends Record<string, unknown>>(
  props: Props
): Partial<Props> {
  const { activeBreakpoints } = useBreakpointsState();
  // Build a map of breakpoint suffixes (e.g. 'Md', 'Xl')
  const suffixes = BREAKPOINTS.map(
    (b) => b.key.charAt(0).toUpperCase() + b.key.slice(1)
  );

  // For each prop, group by root name and collect all responsive variants
  const responsiveMap: Record<string, { [suffix: string]: string }> = {};
  Object.keys(props).forEach((key) => {
    const matchedSuffix = suffixes.find((suffix) => key.endsWith(suffix));
    if (matchedSuffix) {
      const root = key.slice(0, -matchedSuffix.length);
      if (!responsiveMap[root]) responsiveMap[root] = {};
      responsiveMap[root][matchedSuffix.toLowerCase()] = key;
    } else {
      if (!responsiveMap[key]) responsiveMap[key] = {};
      responsiveMap[key]["base"] = key;
    }
  });

  // For each root prop, resolve the value for the highest active breakpoint
  const resolvedProps: Record<string, unknown> = {};
  Object.entries(responsiveMap).forEach(([root, variants]) => {
    // Check breakpoints from highest to lowest
    for (let i = activeBreakpoints.length - 1; i >= 0; i--) {
      const bp = activeBreakpoints[i];
      if (variants[bp]) {
        resolvedProps[root] = props[variants[bp]];
        return;
      }
    }
    // Fallback to base
    if (variants["base"] !== undefined) {
      resolvedProps[root] = props[variants["base"]];
    }
  });

  return resolvedProps as Partial<Props>;
}
