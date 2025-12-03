import Block from "../index";
import indexSource from "../index.ts?raw";
import { componentSourceMap } from "./componentSources";

/**
 * Extract component import paths from index.ts
 */
function extractComponentPaths(source: string): Record<string, string> {
  const paths: Record<string, string> = {};

  // Match patterns like: import MantineCard from "./Card/MantineCard";
  const importRegex = /import\s+(\w+).*from\s+["'](.\/[^"']+)["']/g;
  let match;

  while ((match = importRegex.exec(source)) !== null) {
    const [, importName, path] = match;
    // Store the path for each import
    paths[importName] = path;
  }

  // Match patterns like: import { X, Y } from "./path"
  const namedImportRegex = /import\s+\{([^}]+)\}\s+from\s+["'](.\/[^"']+)["']/g;

  while ((match = namedImportRegex.exec(source)) !== null) {
    const [, imports, path] = match;
    const names = imports.split(",").map((s) => s.trim());
    names.forEach((name) => {
      paths[name] = path;
    });
  }

  return paths;
}

/**
 * Map component names to their import names
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

// Extract component paths and mappings from index.ts
const componentPaths = extractComponentPaths(indexSource);
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
    // To analyze it, add its import to componentSources.ts
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
