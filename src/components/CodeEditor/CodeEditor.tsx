import { Editor, type OnMount } from "@monaco-editor/react";
import "../../monaco-setup";
import { configureMonacoForJSX } from "./monacoConfig";
import { setupAutoCloseJSXTags } from "./autoCloseJSXTags";

export interface CodeEditorProps {
  onChange?: (value: string | undefined) => void;
  typeDefinitions?: string;
}

export default function CodeEditor({
  onChange,
  typeDefinitions,
}: CodeEditorProps) {
  const handleMount: OnMount = (editor, monaco) => {
    console.log("Editor mounted", { editor, monaco });

    // Configure Monaco for JSX/TypeScript
    configureMonacoForJSX(monaco, typeDefinitions);

    // Setup auto-closing JSX tags
    setupAutoCloseJSXTags(editor, monaco);

    console.log("Type definitions added");
  };

  return (
    <Editor
      height="100%"
      defaultLanguage="typescript"
      defaultValue=""
      options={{
        padding: { top: 16, bottom: 16 },
        minimap: { enabled: false },
        fontSize: 14,
        autoClosingBrackets: "always",
        autoClosingQuotes: "always",
        formatOnType: true,
      }}
      onChange={onChange}
      onMount={handleMount}
    />
  );
}
