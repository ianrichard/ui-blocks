/**
 * Extracts property names by parsing useAbstractProps source code
 * This ensures our editor types match what's actually used in the components
 */

import useAbstractPropsSource from "../Block/useAbstractProps.ts?raw";
import useBlockContextSource from "../Block/useBlockContext.ts?raw";

/**
 * Extract property names from destructuring in useAbstractProps
 */
function extractDestructuredProps(source: string): string[] {
  // Match the destructuring pattern in useAbstractProps
  const destructureMatch = source.match(
    /const\s*\{([^}]+)\}\s*=\s*nonResponsiveProps/
  );

  if (!destructureMatch) return [];

  const destructuredText = destructureMatch[1];
  const props = destructuredText
    .split(",")
    .map((line) => {
      const match = line.trim().match(/^(\w+):/);
      return match ? match[1] : null;
    })
    .filter(Boolean) as string[];

  return props;
}

/**
 * Extract space property names from resolveSpaceProp calls
 */
function extractSpaceProps(source: string): string[] {
  const regex = /resolveSpaceProp\(["'](\w+)["']\)/g;
  const props: string[] = [];
  let match;

  while ((match = regex.exec(source)) !== null) {
    props.push(match[1]);
  }

  return [...new Set(props)];
}

/**
 * Extract properties from resolvedProps array access
 */
function extractResolvedProps(source: string): string[] {
  const regex = /resolvedProps\[["'](\w+)["']\]/g;
  const props: string[] = [];
  let match;

  while ((match = regex.exec(source)) !== null) {
    props.push(match[1]);
  }

  return [...new Set(props)];
}

/**
 * Extract layout props from conditional checks
 */
function extractLayoutProps(source: string): string[] {
  const layoutMatch = source.match(/if\s*\(resolvedProps\[["'](\w+)["']\]\)/g);

  if (!layoutMatch) return [];

  const props = layoutMatch
    .map((match) => {
      const propMatch = match.match(/["'](\w+)["']/);
      return propMatch ? propMatch[1] : null;
    })
    .filter(Boolean) as string[];

  return [...new Set(props)];
}

// Extract all prop names from source
const destructuredProps = extractDestructuredProps(useAbstractPropsSource);
const spaceProps = extractSpaceProps(useAbstractPropsSource);
const resolvedProps = extractResolvedProps(useAbstractPropsSource);
const layoutProps = extractLayoutProps(useAbstractPropsSource);

export const ABSTRACT_PROPS_KEYS = destructuredProps;
export const SPACE_PROPS_KEYS = spaceProps;
export const MAPPED_PROPS_KEYS = resolvedProps.filter(
  (prop) => !spaceProps.includes(prop)
);
export const LAYOUT_PROPS_KEYS = layoutProps;

// Extract from useBlockContext (size-related props)
const sizePropsMatch = useBlockContextSource.match(/if\s*\(props\.(\w+)\)/g);
export const OTHER_INPUT_PROPS = sizePropsMatch
  ? sizePropsMatch
      .map((match) => {
        const propMatch = match.match(/props\.(\w+)/);
        return propMatch ? propMatch[1] : null;
      })
      .filter(Boolean)
  : [];

export const ALL_BLOCK_PROP_NAMES = [
  ...ABSTRACT_PROPS_KEYS,
  ...MAPPED_PROPS_KEYS,
  ...SPACE_PROPS_KEYS,
  ...LAYOUT_PROPS_KEYS,
  ...OTHER_INPUT_PROPS,
];
