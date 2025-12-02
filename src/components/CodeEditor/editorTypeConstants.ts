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
 */
export const COMMON_TYPE_DEFINITIONS = `
type SpacingValue = boolean | "xs" | "sm" | "md" | "lg" | "xl";
type SizeValue = "xs" | "sm" | "md" | "lg" | "xl";
`.trim();
