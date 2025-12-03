/**
 * Simplified component prop definitions
 * Instead of parsing source code, we just define which components have custom props
 */

export interface ComponentPropInfo {
  usesBlockProps: boolean;
  customProps: Record<string, string> | null;
}

/**
 * Manually define components with custom props
 * This is simpler and more maintainable than parsing source code
 */
export function analyzeComponentProps(): Record<string, ComponentPropInfo> {
  // Most components use BlockProps, only define exceptions here
  const customComponents: Record<string, ComponentPropInfo> = {
    Button: {
      usesBlockProps: false,
      customProps: {
        children: "React.ReactNode",
        className: "string",
        href: "string",
        secondary: "boolean",
        tertiary: "boolean",
        destructive: "boolean",
        hollow: "boolean",
        disabled: "boolean",
        size: '"xs" | "sm" | "md" | "lg" | "xl"',
      },
    },
    Accordion: {
      usesBlockProps: false,
      customProps: {
        children: "React.ReactNode",
        defaultValue: "string | null",
        multiple: "boolean",
        variant: '"default" | "contained" | "filled" | "separated"',
        radius: "string | number",
        order: "2 | 3 | 4 | 5 | 6",
        className: "string",
      },
    },
  };

  return new Proxy(customComponents, {
    get: (target, prop: string) => {
      // If component is defined, return it
      if (prop in target) {
        return target[prop];
      }
      // Otherwise, assume it uses BlockProps
      return {
        usesBlockProps: true,
        customProps: null,
      };
    },
  });
}
