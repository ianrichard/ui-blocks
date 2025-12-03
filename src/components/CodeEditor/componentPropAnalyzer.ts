/**
 * Extracts component-specific props by importing component source files
 * Identifies which components use BlockInputProps vs custom props
 */

import Block from "../index";

// Import all component sources
const componentSources: Record<string, string> = {};

// Get all component names from Block
const componentNames = Object.keys(Block);

// For now, manually map known components - we can make this fully dynamic later
import MantineAccordionSource from "../Accordion/MantineAccordion.tsx?raw";
import MantineSectionSource from "../Section/MantineSection.tsx?raw";
import MantineButtonSource from "../Button/MantineButton.tsx?raw";

componentSources["Accordion"] = MantineAccordionSource;
componentSources["Section"] = MantineSectionSource;
componentSources["Button"] = MantineButtonSource;

// For components we haven't manually imported, assume they use BlockProps
for (const name of componentNames) {
  if (!componentSources[name]) {
    // Mark as using BlockProps by default
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
  // Match: export interface XxxProps { ... }
  const match = source.match(/export interface \w+Props\s*\{([^}]+)\}/s);
  if (!match) return null;

  const propsText = match[1];
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
