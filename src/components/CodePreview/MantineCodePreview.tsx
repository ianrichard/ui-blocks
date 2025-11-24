import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
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
    <Block.Card inset>
      {title && <Block.Text>{title}</Block.Text>}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1rem",
          // background: "#1e1e1e",
          borderRadius: 12,
        }}
        wrapLongLines
      >
        {src.trim()}
      </SyntaxHighlighter>
    </Block.Card>
  );
}
