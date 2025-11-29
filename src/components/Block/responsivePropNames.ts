import { BREAKPOINTS } from "../Breakpoints/breakpoints";

const RESPONSIVE_PREFIXES = [
  "children",
  "column",
  "columns",
  "gap",
  "height",
  "innerSpace",
  "innerSpaceBottom",
  "innerSpaceLeft",
  "innerSpaceRight",
  "innerSpaceTop",
  "maxHeight",
  "maxWidth",
  "minHeight",
  "minWidth",
  "outerSpace",
  "outerSpaceBottom",
  "outerSpaceLeft",
  "outerSpaceRight",
  "outerSpaceTop",
  "row",
  "textSize",
  "width",
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
