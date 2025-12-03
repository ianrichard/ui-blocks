/**
 * Block-specific type definitions for Monaco editor
 * These are extracted from Block.types.ts
 */

import { SIZE_VALUES_TYPE, SPACE_INPUT_TYPE } from "./typeExtractor";

/**
 * Common type aliases used across Block components
 * Extracted from Block.types.ts where possible
 */
export const BLOCK_TYPE_DEFINITIONS = `
type SizeValue = ${SIZE_VALUES_TYPE};
type SpacingValue = ${SPACE_INPUT_TYPE};
`.trim();
