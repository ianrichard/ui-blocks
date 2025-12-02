import Block from "../components";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import { useRef, useMemo } from "react";
import { encodeBase64 } from "../components/CodePreviewPage/utils";
import { generateEditorTypes } from "../components/CodeEditor/generateEditorTypes";

export default function EditorPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Generate type definitions dynamically
  const editorTypes = useMemo(() => generateEditorTypes(), []);

  function handleChange(value: string | undefined) {
    const str = value ?? "";
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        { code: encodeBase64(str) },
        "*"
      );
    }
  }

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
        <CodeEditor onChange={handleChange} typeDefinitions={editorTypes} />
      </Block.Card>
    </Block.Section>
  );
}
