import { lazy, Suspense } from "react";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import MantineBlock from "../Block/MantineBlock";
import type { BlockInputProps } from "../Block/Block.types";
const SyntaxHighlighter = lazy(() =>
  import("react-syntax-highlighter").then((mod) => ({ default: mod.Prism }))
);

export interface CodePreviewProps extends BlockInputProps {
  src: string;
  language?: string;
  title?: string;
  showReactReturnOnly?: boolean;
}

function extractReturnContent(src: string): string {
  // Simple regex to extract content inside the first return ( ... )
  const match = src.match(/return\s*\(([^]*)\)/m);
  if (match && match[1]) {
    let lines = match[1]
      .split("\n")
      .map((line) => line.replace(/\s+$/g, "")) // remove trailing spaces
      .filter((line) => line.trim() !== ""); // remove empty lines
    // Find minimum indentation (ignoring empty lines)
    const minIndent =
      lines.reduce((min, line) => {
        if (!line.trim()) return min;
        const match = line.match(/^\s*/);
        const indent = match ? match[0].length : 0;
        return min === null ? indent : Math.min(min, indent);
      }, null as number | null) ?? 0;
    // Remove minIndent from each line, preserve original relative indentation
    lines = lines.map((line) => line.slice(minIndent));
    return lines.join("\n");
  }
  return src.trim();
}

export default function MantineCodePreview({
  src,
  language = "tsx",
  showReactReturnOnly,
  ...props
}: CodePreviewProps) {
  // If language is tsx and showReactReturnOnly is undefined, default to true
  const shouldShowReturnOnly =
    language === "tsx" ? showReactReturnOnly ?? true : showReactReturnOnly;
  const displaySrc =
    shouldShowReturnOnly && language === "tsx"
      ? extractReturnContent(src)
      : src.trim();
  return (
    <MantineBlock
      component={Suspense}
      fallback={<div>Loading…</div>}
      {...props}
    >
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: "0",
          padding: "1rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          // borderRadius: 12,
        }}
        wrapLongLines
      >
        {displaySrc}
      </SyntaxHighlighter>
    </MantineBlock>
  );
}
