import { lazy, Suspense } from "react";
const SyntaxHighlighter = lazy(() =>
  import("react-syntax-highlighter").then((mod) => ({ default: mod.Prism }))
);
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Block from "..";

export interface CodePreviewProps {
  src: string;
  language?: string;
  title?: string;
}

export default function MantineCodePreview({
  src,
  language = "tsx",
  title,
}: CodePreviewProps) {
  return (
    <Block.Card>
      {title && (
        <Block.Title innerSpace level4>
          {title}
        </Block.Title>
      )}
      <Suspense fallback={<div>Loading…</div>}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            // borderRadius: 12,
          }}
          wrapLongLines
        >
          {src.trim()}
        </SyntaxHighlighter>
      </Suspense>
    </Block.Card>
  );
}
