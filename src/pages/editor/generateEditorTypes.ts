/**
 * Main orchestrator for generating Monaco editor type definitions
 * Combines base types, BlockProps, custom component props, and component declarations
 */

import Block from "../../components";
import { REACT_TYPES, COMMON_TYPES } from "./types/baseTypes";
import { generateBlockPropsInterface } from "./types/typeGenerators";
import {
  BUTTON_PROPS,
  ACCORDION_PROPS,
  CUSTOM_COMPONENT_MAP,
} from "./types/customComponents";
import {
  ABSTRACT_PROPS_KEYS,
  MAPPED_PROPS_KEYS,
  SPACE_PROPS_KEYS,
  LAYOUT_PROPS_KEYS,
  OTHER_INPUT_PROPS,
} from "./blockPropNames";

/**
 * Generate complete Monaco type definitions
 */
export function generateEditorTypes(): string {
  const componentNames = Object.keys(Block);

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

  // Custom component interfaces (Button, Accordion, etc.)
  const customInterfaces = [BUTTON_PROPS, ACCORDION_PROPS];

  // Generate Block component declarations
  const blockDeclaration = `declare const Block: {
${componentNames
  .map((name) => {
    const propsType = CUSTOM_COMPONENT_MAP[name] || "BlockProps";
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
