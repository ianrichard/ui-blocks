import Block from "../index";
import {
  REACT_TYPE_DEFINITIONS,
  COMMON_TYPE_DEFINITIONS,
} from "./editorTypeConstants";
import {
  ABSTRACT_PROPS_KEYS,
  MAPPED_PROPS_KEYS,
  SPACE_PROPS_KEYS,
  LAYOUT_PROPS_KEYS,
  OTHER_INPUT_PROPS,
} from "./blockPropNames";
import { analyzeComponentProps } from "./componentPropAnalyzer";

/**
 * Generates Monaco-compatible type definitions for Block components
 * Uses real prop names extracted from useAbstractProps and MantineBlock
 */
export function generateEditorTypes(): string {
  // Get all Block component names dynamically
  const componentNames = Object.keys(Block);

  // Analyze which components use BlockProps vs custom props
  const componentPropInfo = analyzeComponentProps();

  // Helper to generate prop definition
  const prop = (name: string, type: string) => ({
    name,
    type,
    optional: true,
  });

  // Helper to generate responsive variants (e.g., widthXs, widthSm, widthMd, widthLg, widthXl)
  const responsiveVariants = (
    baseName: string,
    type: string
  ): Array<{ name: string; type: string; optional: true }> => {
    const breakpoints = ["Xs", "Sm", "Md", "Lg", "Xl"];
    return [
      prop(baseName, type),
      ...breakpoints.map((bp) => prop(`${baseName}${bp}`, type)),
    ];
  };

  // Build property categories using real extracted names
  const propCategories = {
    basics: [
      prop("children", "React.ReactNode"),
      prop("className", "string"),
      prop("style", "React.CSSProperties"),
      prop("onClick", "() => void"),
    ],
    layout: [
      ...LAYOUT_PROPS_KEYS.flatMap((name) =>
        responsiveVariants(name, "boolean")
      ),
      ...ABSTRACT_PROPS_KEYS.filter((name) =>
        ["fillSpace", "wrap"].includes(name)
      ).flatMap((name) => responsiveVariants(name, "boolean")),
    ],
    spacing: SPACE_PROPS_KEYS.flatMap((name) =>
      responsiveVariants(name, "SpacingValue")
    ),
    sizing: [
      ...MAPPED_PROPS_KEYS.filter((name) =>
        [
          "width",
          "height",
          "minWidth",
          "maxWidth",
          "minHeight",
          "maxHeight",
        ].includes(name)
      ).flatMap((name) => responsiveVariants(name, "string | number")),
      ...MAPPED_PROPS_KEYS.filter((name) => name === "columns").flatMap(
        (name) => responsiveVariants(name, "number")
      ),
    ],
    alignment: ABSTRACT_PROPS_KEYS.filter((name) =>
      name.startsWith("align")
    ).map((name) => prop(name, "boolean")),
    background: ABSTRACT_PROPS_KEYS.filter(
      (name) => name.startsWith("background") || name === "backgroundImage"
    ).map((name) =>
      name === "backgroundImage" ? prop(name, "string") : prop(name, "boolean")
    ),
    border: ABSTRACT_PROPS_KEYS.filter((name) => name.startsWith("border")).map(
      (name) => prop(name, "boolean")
    ),
    visual: ABSTRACT_PROPS_KEYS.filter((name) =>
      ["sticky", "frost"].includes(name)
    ).map((name) =>
      name === "frost"
        ? prop(name, 'boolean | "xs" | "sm" | "md" | "lg" | "xl"')
        : prop(name, "boolean")
    ),
    size: OTHER_INPUT_PROPS.flatMap((name) => {
      if (name === "size") {
        return responsiveVariants(name, '"xs" | "sm" | "md" | "lg" | "xl"');
      }
      return [prop(name, "boolean")];
    }),
  };

  // Generate property strings for each category
  const generatePropsSection = (
    categoryName: string,
    props: Array<{ name: string; type: string; optional: boolean }>
  ) => {
    const propsStr = props
      .map((prop) => `  ${prop.name}${prop.optional ? "?" : ""}: ${prop.type};`)
      .join("\n");
    return `  // ${
      categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    }\n${propsStr}`;
  };

  // Build the BlockProps interface dynamically
  const blockPropsInterface = `
interface BlockProps {
${Object.entries(propCategories)
  .map(([category, props]) => generatePropsSection(category, props))
  .join("\n\n")}
}
  `.trim();

  // Generate component-specific interfaces for components with custom props
  const customInterfaces: string[] = [];
  for (const [name, info] of Object.entries(componentPropInfo)) {
    if (!info.usesBlockProps && info.customProps) {
      const propsStr = Object.entries(info.customProps)
        .map(([propName, propType]) => `  ${propName}?: ${propType};`)
        .join("\n");
      customInterfaces.push(
        `
interface ${name}Props {
${propsStr}
}
      `.trim()
      );
    }
  }

  // Generate Block component declarations dynamically
  const blockDeclaration = `
declare const Block: {
${componentNames
  .map((name) => {
    const info = componentPropInfo[name];
    if (info && !info.usesBlockProps && info.customProps) {
      return `  ${name}: React.FC<${name}Props>;`;
    }
    return `  ${name}: React.FC<BlockProps>;`;
  })
  .join("\n")}
};
  `.trim();

  // Combine all parts
  return [
    REACT_TYPE_DEFINITIONS,
    COMMON_TYPE_DEFINITIONS,
    blockPropsInterface,
    ...customInterfaces,
    blockDeclaration,
  ].join("\n\n");
}
