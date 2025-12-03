/**
 * Main orchestrator for generating Monaco editor type definitions
 * Combines base types, BlockProps, custom component props, and component declarations
 */

import Block from "../../components";
import { REACT_TYPES, COMMON_TYPES } from "./types/baseTypes";
import { generateBlockPropsInterface } from "./types/typeGenerators";
import {
  ABSTRACT_PROPS_KEYS,
  MAPPED_PROPS_KEYS,
  SPACE_PROPS_KEYS,
  LAYOUT_PROPS_KEYS,
  OTHER_INPUT_PROPS,
} from "./blockPropNames";
import { analyzeComponentProps } from "./componentPropAnalyzer";

/**
 * Generate complete Monaco type definitions
 */
export function generateEditorTypes(): string {
  const componentNames = Object.keys(Block);
  const componentPropInfo = analyzeComponentProps();

  // Generate BlockProps from extracted prop names
  const blockPropsInterface = generateBlockPropsInterface({
    layout: LAYOUT_PROPS_KEYS,
    spacing: SPACE_PROPS_KEYS,
    sizing: MAPPED_PROPS_KEYS.filter((p) =>
      [
        "width",
        "height",
        "minWidth",
        "maxWidth",
        "minHeight",
        "maxHeight",
      ].includes(p)
    ),
    alignment: ABSTRACT_PROPS_KEYS.filter((p) => p.startsWith("align")),
    background: ABSTRACT_PROPS_KEYS.filter(
      (p) => p.startsWith("background") || p === "backgroundImage"
    ),
    border: ABSTRACT_PROPS_KEYS.filter((p) => p.startsWith("border")),
    visual: ABSTRACT_PROPS_KEYS.filter((p) => ["sticky", "frost"].includes(p)),
    other: OTHER_INPUT_PROPS.filter((p): p is string => p !== null),
  });

  // Generate custom component interfaces
  const customInterfaces: string[] = [];
  for (const [name, info] of Object.entries(componentPropInfo)) {
    if (!info.usesBlockProps && info.customProps) {
      const propsStr = Object.entries(info.customProps)
        .map(([propName, propType]) => `  ${propName}?: ${propType};`)
        .join("\n");
      customInterfaces.push(`interface ${name}Props {\n${propsStr}\n}`);
    }
  }

  // Generate Block component declarations
  const blockDeclaration = `declare const Block: {
${componentNames
  .map((name) => {
    const info = componentPropInfo[name];
    const propsType =
      info && !info.usesBlockProps && info.customProps
        ? `${name}Props`
        : "BlockProps";
    return `  ${name}: React.FC<${propsType}>;`;
  })
  .join("\n")}
};`;

  // Combine all parts
  return [
    REACT_TYPES,
    COMMON_TYPES,
    blockPropsInterface,
    ...customInterfaces,
    blockDeclaration,
  ].join("\n\n");
}
