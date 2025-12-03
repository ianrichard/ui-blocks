/**
 * Custom component prop definitions
 * These components don't use BlockProps
 */

export const BUTTON_PROPS = `
interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  secondary?: boolean;
  tertiary?: boolean;
  destructive?: boolean;
  hollow?: boolean;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
`.trim();

export const ACCORDION_PROPS = `
interface AccordionProps {
  children?: React.ReactNode;
  defaultValue?: string | null;
  multiple?: boolean;
  variant?: "default" | "contained" | "filled" | "separated";
  radius?: string | number;
  order?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}
`.trim();

/**
 * Map component names to their custom prop types
 * Components not in this map use BlockProps
 */
export const CUSTOM_COMPONENT_MAP: Record<string, string> = {
  Button: "ButtonProps",
  Accordion: "AccordionProps",
};
