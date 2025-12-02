import ts from "typescript";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Path to Block.types.ts
const typesFilePath = path.resolve(
  __dirname,
  "../src/components/Block/Block.types.ts"
);

// Path to output file
const outputFilePath = path.resolve(__dirname, "../src/editor-types.d.ts");

// Read the types file
const sourceCode = fs.readFileSync(typesFilePath, "utf-8");

// Create a TypeScript program
const sourceFile = ts.createSourceFile(
  "Block.types.ts",
  sourceCode,
  ts.ScriptTarget.Latest,
  true
);

// Find BlockInputProps interface
function findBlockInputProps(node) {
  if (ts.isInterfaceDeclaration(node) && node.name.text === "BlockInputProps") {
    return node;
  }
  let result = null;
  ts.forEachChild(node, (child) => {
    if (!result) {
      result = findBlockInputProps(child);
    }
  });
  return result;
}

const blockInputPropsNode = findBlockInputProps(sourceFile);

if (!blockInputPropsNode) {
  console.error("Could not find BlockInputProps interface");
  process.exit(1);
}

// Get all properties from the interface and its extends
const printer = ts.createPrinter();

// Extract properties as strings
const properties = blockInputPropsNode.members.map((member) => {
  return printer.printNode(ts.EmitHint.Unspecified, member, sourceFile);
});

// Build the editor types file
const editorTypes = `
declare namespace React {
  type ReactNode = any;
  type FC<P = {}> = (props: P) => ReactElement | null;
  interface ReactElement {}
  interface CSSProperties {
    [key: string]: any;
  }
}

type MantineSize = "xs" | "sm" | "md" | "lg" | "xl";
type MantineSpacing = "xs" | "sm" | "md" | "lg" | "xl" | number;

interface BlockProps {
  ${properties.join("\n  ")}
}

declare const Block: {
  Section: React.FC<BlockProps>;
  Card: React.FC<BlockProps>;
  Button: React.FC<BlockProps>;
  Text: React.FC<BlockProps>;
  Title: React.FC<BlockProps>;
  Image: React.FC<BlockProps>;
  Link: React.FC<BlockProps>;
  Avatar: React.FC<BlockProps>;
  Grid: React.FC<BlockProps>;
  GridItem: React.FC<BlockProps>;
  Icon: React.FC<BlockProps>;
  UtilityIcon: React.FC<BlockProps>;
  Input: React.FC<BlockProps>;
  Badge: React.FC<BlockProps>;
  Markdown: React.FC<BlockProps>;
  Modal: React.FC<BlockProps>;
  Alert: React.FC<BlockProps>;
  Accordion: React.FC<BlockProps>;
  ButtonGroup: React.FC<BlockProps>;
  Tabs: React.FC<BlockProps>;
  Tab: React.FC<BlockProps>;
  TabPanel: React.FC<BlockProps>;
  AccordionItem: React.FC<BlockProps>;
  AccordionControl: React.FC<BlockProps>;
  AccordionPanel: React.FC<BlockProps>;
};
`.trim();

fs.writeFileSync(outputFilePath, editorTypes);
console.log("✅ Generated editor-types.d.ts");
