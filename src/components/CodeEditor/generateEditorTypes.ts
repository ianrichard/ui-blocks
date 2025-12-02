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

/**
 * Generates Monaco-compatible type definitions for Block components
 * Uses real prop names extracted from useAbstractProps and MantineBlock
 */
export function generateEditorTypes(): string {
  // Get all Block component names dynamically
  const componentNames = Object.keys(Block);

  // Helper to generate prop definition
  const prop = (name: string, type: string) => ({
    name,
    type,
    optional: true,
  });

  // Build property categories using real extracted names
  const propCategories = {
    basics: [
      prop("children", "React.ReactNode"),
      prop("className", "string"),
      prop("style", "React.CSSProperties"),
      prop("onClick", "() => void"),
    ],
    layout: [
      ...LAYOUT_PROPS_KEYS.map((name) => prop(name, "boolean")),
      ...ABSTRACT_PROPS_KEYS.filter((name) =>
        ["fillSpace", "wrap"].includes(name)
      ).map((name) => prop(name, "boolean")),
    ],
    spacing: SPACE_PROPS_KEYS.map((name) => prop(name, "SpacingValue")),
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
      ).map((name) => prop(name, "string | number")),
      ...MAPPED_PROPS_KEYS.filter((name) => name === "columns").map((name) =>
        prop(name, "number")
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
    size: OTHER_INPUT_PROPS.map((name) =>
      name === "size"
        ? prop(name, '"xs" | "sm" | "md" | "lg" | "xl"')
        : prop(name, "boolean")
    ),
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

  // Generate Block component declarations dynamically
  const blockDeclaration = `
declare const Block: {
${componentNames.map((name) => `  ${name}: React.FC<BlockProps>;`).join("\n")}
};
  `.trim();

  // Combine all parts
  return [
    REACT_TYPE_DEFINITIONS,
    COMMON_TYPE_DEFINITIONS,
    blockPropsInterface,
    blockDeclaration,
  ].join("\n\n");
}
