import { SIZE_VALUES_TYPE, SPACE_INPUT_TYPE } from "./typeExtractor";

/**
 * Base React type definitions that Monaco needs for JSX/TSX support
 */
export const REACT_TYPE_DEFINITIONS = `
declare namespace React {
  type ReactNode = any;
  type FC<P = {}> = (props: P) => ReactElement | null;
  interface ReactElement {}
  interface CSSProperties {
    [key: string]: any;
  }
}
`.trim();

/**
 * Common type aliases used across Block components
 * Extracted from Block.types.ts where possible
 */
export const COMMON_TYPE_DEFINITIONS = `
type SizeValue = ${SIZE_VALUES_TYPE};
type SpacingValue = ${SPACE_INPUT_TYPE};
`.trim();
