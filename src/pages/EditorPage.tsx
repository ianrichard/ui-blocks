import Block from "../components";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import { useState, useRef } from "react";
import { encodeBase64 } from "../components/CodePreviewPage/utils";

export default function EditorPage() {
  const [code, setCode] = useState<string>("// some comment");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function handleChange(value: string | undefined) {
    const str = value ?? "";
    setCode(str);
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        { code: encodeBase64(str) },
        "*"
      );
    }
  }

  // Generate TypeScript definitions for Block components
  const typeDefinitions = `
    declare module 'react' {
      interface ReactNode {}
      interface ReactElement<P = any> {}
      type FC<P = {}> = (props: P) => ReactElement | null;
    }

    interface BlockProps {
      children?: React.ReactNode;
      className?: string;
      column?: boolean;
      row?: boolean;
      gap?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      innerSpace?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      innerSpaceTop?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      innerSpaceBottom?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      innerSpaceLeft?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      innerSpaceRight?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      outerSpace?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      outerSpaceTop?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      outerSpaceBottom?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      outerSpaceLeft?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      outerSpaceRight?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
      width?: string | number;
      height?: string | number;
      minWidth?: string | number;
      maxWidth?: string | number;
      minHeight?: string | number;
      maxHeight?: string | number;
      fillSpace?: boolean;
      alignCenter?: boolean;
      alignMiddle?: boolean;
      alignLeft?: boolean;
      alignRight?: boolean;
      backgroundSecondary?: boolean;
      backgroundInverse?: boolean;
      onClick?: () => void;
      style?: React.CSSProperties;
    }

    interface ButtonProps extends BlockProps {
      onClick?: () => void;
      disabled?: boolean;
      variant?: "filled" | "light" | "outline" | "subtle" | "white" | "default";
      size?: "xs" | "sm" | "md" | "lg" | "xl";
    }

    interface TextProps extends BlockProps {
      size?: "xs" | "sm" | "md" | "lg" | "xl";
      weight?: number | "bold";
    }

    declare const Block: React.FC<BlockProps> & {
      Section: React.FC<BlockProps>;
      Card: React.FC<BlockProps>;
      Button: React.FC<ButtonProps>;
      Text: React.FC<TextProps>;
      Title: React.FC<TextProps>;
      Image: React.FC<BlockProps & { src?: string; alt?: string }>;
      Link: React.FC<BlockProps & { href?: string }>;
      Avatar: React.FC<BlockProps & { src?: string }>;
      Grid: React.FC<BlockProps>;
      GridItem: React.FC<BlockProps>;
      Icon: React.FC<BlockProps & { name?: string }>;
      UtilityIcon: React.FC<BlockProps & { name?: string }>;
      Input: React.FC<BlockProps & { placeholder?: string; value?: string }>;
      Badge: React.FC<BlockProps>;
      Markdown: React.FC<BlockProps & { content?: string }>;
      Modal: React.FC<BlockProps & { opened?: boolean; onClose?: () => void }>;
      Alert: React.FC<BlockProps & { title?: string }>;
      Accordion: React.FC<BlockProps>;
    };
  `;

  return (
    <Block.Section column gap innerSpaceTop innerSpaceBottom height="100vh">
      <Block.Card
        style={{
          overflow: "hidden",
        }}
        height="50vh"
      >
        <iframe
          ref={iframeRef}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          src="/preview"
        />
      </Block.Card>
      <Block.Card fillSpace>
        <CodeEditor onChange={handleChange} />
      </Block.Card>
    </Block.Section>
  );
}
