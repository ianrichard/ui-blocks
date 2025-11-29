export const BREAKPOINTS = [
  { key: "xs", value: 576 },
  { key: "sm", value: 768 },
  { key: "md", value: 992 },
  { key: "lg", value: 1200 },
  { key: "xl", value: 1408 },
];

const RESPONSIVE_PREFIXES = [
  "children",
  "column",
  "columns",
  "gap",
  "height",
  "innerSpace",
  "innerSpaceTop",
  "innerSpaceBottom",
  "innerSpaceLeft",
  "innerSpaceRight",
  "innerSpaceTopBottom",
  "innerSpaceLeftRight",
  "maxHeight",
  "maxWidth",
  "minHeight",
  "minWidth",
  "outerSpace",
  "outerSpaceTop",
  "outerSpaceBottom",
  "outerSpaceLeft",
  "outerSpaceRight",
  "outerSpaceTopBottom",
  "outerSpaceLeftRight",
  "row",
  "size",
  "width",
  "scale",
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

export const EXCLUDED_KEYS = new Set([
  ...RESPONSIVE_PROP_NAMES,
  "scaleCozy",
  "scaleCompact",
]);
