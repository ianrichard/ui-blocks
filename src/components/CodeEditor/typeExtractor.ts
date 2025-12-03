import BlockTypesSource from "../Block/Block.types.ts?raw";

function extractTypeDefinition(
  source: string,
  typeName: string
): string | null {
  const typeRegex = new RegExp(`export type ${typeName}\\s*=\\s*([^;]+);`, "s");
  const match = source.match(typeRegex);
  return match ? match[1].trim() : null;
}

export const SIZE_VALUES_TYPE = extractTypeDefinition(
  BlockTypesSource,
  "SizeValues"
);

export const SPACING_VALUES_TYPE = extractTypeDefinition(
  BlockTypesSource,
  "SpaceValues"
);

export const SPACE_INPUT_TYPE = extractTypeDefinition(
  BlockTypesSource,
  "SpaceInputProp"
);

export const FROST_INPUT_TYPE = extractTypeDefinition(
  BlockTypesSource,
  "FrostInputProp"
);

export { BlockTypesSource };
