import Block from "../../components/index";
import indexSource from "../../components/index.ts?raw";
import { componentSourceMap } from "./componentSources";

/**
 * Map component names in Block object to their import names from index.ts
 */
function mapComponentNamesToImports(source: string): Record<string, string> {
  const mapping: Record<string, string> = {};

  // Match the Block object definition
  const blockMatch = source.match(/const Block = \{([^}]+)\}/s);
  if (!blockMatch) return mapping;

  const blockContent = blockMatch[1];
  const lines = blockContent.split(",");

  for (const line of lines) {
    const match = line.trim().match(/^(\w+):\s*(\w+)/);
    if (match) {
      const [, blockKey, importName] = match;
      mapping[blockKey] = importName;
    }
  }

  return mapping;
}

// Extract component mapping from index.ts
const componentMapping = mapComponentNamesToImports(indexSource);

// Get all component names from Block
const componentNames = Object.keys(Block);

// Build componentSources by matching Block component names to their import sources
const componentSources: Record<string, string> = {};

for (const name of componentNames) {
  const importName = componentMapping[name];

  if (importName && componentSourceMap[importName]) {
    // We have the source for this component
    componentSources[name] = componentSourceMap[importName];
  } else {
    // Component not analyzed yet - assume it uses BlockProps
    componentSources[name] = "extends BlockInputProps";
  }
}

/**
 * Check if component extends BlockInputProps
 */
function extendsBlockInputProps(source: string): boolean {
  return source.includes("extends BlockInputProps");
}

/**
 * Extract custom props interface from component
 */
function extractCustomPropsInterface(
  source: string
): Record<string, string> | null {
  // Match: interface XxxProps { ... }
  // This handles both exported and non-exported interfaces
  const match = source.match(/interface (\w+Props)\s*\{([^}]+)\}/s);

  if (!match) return null;

  const propsText = match[2];
  const props: Record<string, string> = {};

  // Parse each prop line
  const lines = propsText.split("\n");
  for (const line of lines) {
    const propMatch = line.trim().match(/^(\w+)\??:\s*([^;]+);?/);
    if (propMatch) {
      const [, name, type] = propMatch;
      props[name] = type.trim();
    }
  }

  return props;
}

export interface ComponentPropInfo {
  usesBlockProps: boolean;
  customProps: Record<string, string> | null;
}

/**
 * Analyze all components and their prop types
 */
export function analyzeComponentProps(): Record<string, ComponentPropInfo> {
  const analysis: Record<string, ComponentPropInfo> = {};

  for (const [name, source] of Object.entries(componentSources)) {
    const usesBlockProps = extendsBlockInputProps(source);
    const customProps = usesBlockProps
      ? null
      : extractCustomPropsInterface(source);

    analysis[name] = {
      usesBlockProps,
      customProps,
    };
  }

  return analysis;
}
