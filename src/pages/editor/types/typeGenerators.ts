/**
 * Helper to generate responsive prop variants
 */
export function generateResponsiveProps(
  baseName: string,
  type: string
): string {
  const breakpoints = ["Xs", "Sm", "Md", "Lg", "Xl"];
  const variants = [
    `  ${baseName}?: ${type};`,
    ...breakpoints.map((bp) => `  ${baseName}${bp}?: ${type};`),
  ];
  return variants.join("\n");
}

/**
 * Generate BlockProps interface from prop categories
 */
export function generateBlockPropsInterface(propNames: {
  layout: string[];
  spacing: string[];
  sizing: string[];
  alignment: string[];
  background: string[];
  border: string[];
  visual: string[];
  other: string[];
}): string {
  const sections = [
    "  // Basics",
    "  children?: React.ReactNode;",
    "  className?: string;",
    "  style?: React.CSSProperties;",
    "  onClick?: () => void;",
    "",
    "  // Layout",
    ...propNames.layout.map((name) => generateResponsiveProps(name, "boolean")),
    "",
    "  // Spacing",
    ...propNames.spacing.map((name) =>
      generateResponsiveProps(name, "SpacingValue")
    ),
    "",
    "  // Sizing",
    ...propNames.sizing.map((name) =>
      generateResponsiveProps(name, "string | number")
    ),
    "",
    "  // Alignment",
    ...propNames.alignment.map((name) => `  ${name}?: boolean;`),
    "",
    "  // Background",
    ...propNames.background.map((name) => `  ${name}?: boolean | string;`),
    "",
    "  // Border",
    ...propNames.border.map((name) => `  ${name}?: boolean;`),
    "",
    "  // Visual",
    ...propNames.visual.map((name) => `  ${name}?: boolean | SpacingValue;`),
    "",
    "  // Other",
    ...propNames.other.map((name) => `  ${name}?: boolean | SizeValue;`),
  ];

  return `interface BlockProps {\n${sections.join("\n")}\n}`;
}
