import { mantineSizes } from "../Size/resolveSizeProp";

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

export const responsivePropNames: string[] = (() => {
  const keys: string[] = [];
  for (const base of RESPONSIVE_PREFIXES) {
    for (const bp of BREAKPOINTS) {
      keys.push(bp ? `${base}${bp}` : base);
    }
  }
  return keys;
})();
