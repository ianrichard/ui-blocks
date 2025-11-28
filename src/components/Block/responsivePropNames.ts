import { BREAKPOINTS } from "../Breakpoints/breakpoints";

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
  "size",
];

const BREAKPOINT_SUFFIXES = [
  "",
  ...BREAKPOINTS.map((b) => b.key.charAt(0).toUpperCase() + b.key.slice(1)),
];

export const RESPONSIVE_PROP_NAMES: string[] = (() => {
  const keys: string[] = [];
  for (const base of RESPONSIVE_PREFIXES) {
    for (const breakpoint of BREAKPOINT_SUFFIXES) {
      keys.push(breakpoint ? `${base}${breakpoint}` : base);
    }
  }
  return keys;
})();
