/**
 * Generic React type definitions that Monaco needs for JSX/TSX support
 * This is reusable for any React-based Monaco editor
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
