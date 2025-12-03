/**
 * Extracts type definitions from Block.types.ts source code
 * This allows us to use the actual type values instead of hardcoding them
 */

import BlockTypesSource from "../../components/Block/Block.types.ts?raw";

/**
 * Extract a specific type definition by name from source code
 */
function extractTypeDefinition(
  source: string,
  typeName: string
): string | null {
  const typeRegex = new RegExp(`export type ${typeName}\\s*=\\s*([^;]+);`, "s");
  const match = source.match(typeRegex);
  return match ? match[1].trim() : null;
}

// Extract type values from Block.types.ts
export const SIZE_VALUES_TYPE = extractTypeDefinition(
  BlockTypesSource,
  "SizeValues"
);

export const SPACE_INPUT_TYPE = extractTypeDefinition(
  BlockTypesSource,
  "SpaceInputProp"
);

export const FROST_INPUT_TYPE = extractTypeDefinition(
  BlockTypesSource,
  "FrostInputProp"
);
