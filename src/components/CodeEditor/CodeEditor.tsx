import { Editor, type OnMount } from "@monaco-editor/react";
import "../../monaco-setup";
import { configureMonacoForJSX } from "./monacoConfig";
import { setupAutoCloseJSXTags } from "./autoCloseJSXTags";

/**
 * Generic code editor component using Monaco
 * Pass in custom type definitions via the typeDefinitions prop
 */
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

    // Configure suggest options to filter suggestions
    editor.updateOptions({
      suggest: {
        showKeywords: false,
        // showSnippets: false,
        // showProperties: false, // Hide property names like "Section", "Card"
      },
    });

    // Trigger suggestions after typing '=' or '"'
    editor.onDidChangeModelContent(() => {
      const model = editor.getModel();
      if (!model) return;

      const position = editor.getPosition();
      if (!position) return;

      const textBeforeCursor = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: Math.max(1, position.column - 1),
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      });

      // Auto-trigger suggestions after = or opening quote
      if (textBeforeCursor === "=" || textBeforeCursor === '"') {
        editor.trigger("keyboard", "editor.action.triggerSuggest", {});
      }
    });

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
        quickSuggestions: {
          other: true,
          comments: false,
          strings: true,
        },
        suggestOnTriggerCharacters: true,
      }}
      onChange={onChange}
      onMount={handleMount}
    />
  );
}
