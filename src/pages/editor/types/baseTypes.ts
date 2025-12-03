/**
 * React base type definitions for Monaco
 */
export const REACT_TYPES = `
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
 * Common type aliases for Block components
 */
export const COMMON_TYPES = `
type SizeValue = "xs" | "sm" | "md" | "lg" | "xl";
type SpacingValue = boolean | "xs" | "sm" | "md" | "lg" | "xl";
`.trim();
