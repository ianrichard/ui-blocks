import Block from "../index";
import {
  REACT_TYPE_DEFINITIONS,
  COMMON_TYPE_DEFINITIONS,
} from "./editorTypeConstants";

/**
 * Generates Monaco-compatible type definitions for Block components
 * MVP: Extracts common prop patterns and generates basic types
 */
export function generateEditorTypes(): string {
  // Get all Block component names dynamically
  const componentNames = Object.keys(Block);

  // Define property categories dynamically
  const propCategories = {
    basics: [
      { name: "children", type: "React.ReactNode", optional: true },
      { name: "className", type: "string", optional: true },
      { name: "style", type: "React.CSSProperties", optional: true },
      { name: "onClick", type: "() => void", optional: true },
    ],
    layout: [
      { name: "column", type: "boolean", optional: true },
      { name: "row", type: "boolean", optional: true },
      { name: "fillSpace", type: "boolean", optional: true },
      { name: "wrap", type: "boolean", optional: true },
    ],
    spacing: [
      { name: "gap", type: "SpacingValue", optional: true },
      { name: "innerSpace", type: "SpacingValue", optional: true },
      { name: "innerSpaceTop", type: "SpacingValue", optional: true },
      { name: "innerSpaceBottom", type: "SpacingValue", optional: true },
      { name: "innerSpaceLeft", type: "SpacingValue", optional: true },
      { name: "innerSpaceRight", type: "SpacingValue", optional: true },
      { name: "outerSpace", type: "SpacingValue", optional: true },
      { name: "outerSpaceTop", type: "SpacingValue", optional: true },
      { name: "outerSpaceBottom", type: "SpacingValue", optional: true },
      { name: "outerSpaceLeft", type: "SpacingValue", optional: true },
      { name: "outerSpaceRight", type: "SpacingValue", optional: true },
    ],
    sizing: [
      { name: "width", type: "string | number", optional: true },
      { name: "height", type: "string | number", optional: true },
      { name: "minWidth", type: "string | number", optional: true },
      { name: "maxWidth", type: "string | number", optional: true },
      { name: "minHeight", type: "string | number", optional: true },
      { name: "maxHeight", type: "string | number", optional: true },
    ],
    alignment: [
      { name: "alignCenter", type: "boolean", optional: true },
      { name: "alignMiddle", type: "boolean", optional: true },
      { name: "alignLeft", type: "boolean", optional: true },
      { name: "alignRight", type: "boolean", optional: true },
      { name: "alignBottom", type: "boolean", optional: true },
    ],
    background: [
      { name: "backgroundSecondary", type: "boolean", optional: true },
      { name: "backgroundInverse", type: "boolean", optional: true },
      { name: "background", type: "boolean", optional: true },
      { name: "backgroundImage", type: "string", optional: true },
    ],
    border: [
      { name: "border", type: "boolean", optional: true },
      { name: "borderTop", type: "boolean", optional: true },
      { name: "borderBottom", type: "boolean", optional: true },
      { name: "borderLeft", type: "boolean", optional: true },
      { name: "borderRight", type: "boolean", optional: true },
    ],
    other: [
      { name: "sticky", type: "boolean", optional: true },
      {
        name: "frost",
        type: 'boolean | "xs" | "sm" | "md" | "lg" | "xl"',
        optional: true,
      },
    ],
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
