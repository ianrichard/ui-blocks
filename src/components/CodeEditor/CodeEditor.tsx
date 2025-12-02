import { Editor, type OnMount } from "@monaco-editor/react";
import "../../monaco-setup";

export interface CodeEditorProps {
  onChange?: (value: string | undefined) => void;
}

export default function CodeEditor({ onChange }: CodeEditorProps) {
  const handleMount: OnMount = (editor, monaco) => {
    console.log("Editor mounted", { editor, monaco });

    // Configure TypeScript for JSX
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.React,
      jsxFactory: "React.createElement",
      reactNamespace: "React",
      allowNonTsExtensions: true,
      allowJs: true,
      noLib: true, // Disable default lib suggestions
    });

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });

    // Add React types
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `
      declare namespace React {
        type ReactNode = any;
        type FC<P = {}> = (props: P) => ReactElement | null;
        interface ReactElement {}
      }
      declare const Block: {
        Section: React.FC<{ children?: React.ReactNode }>;
        Card: React.FC<{ children?: React.ReactNode }>;
      };
      `,
      "file:///node_modules/@types/react/index.d.ts"
    );

    // Auto-close JSX tags when typing '>'
    editor.onKeyDown((event) => {
      const model = editor.getModel();
      if (!model) return;

      const isSelfClosing = (tag: string) =>
        [
          "br",
          "hr",
          "img",
          "input",
          "link",
          "meta",
          "area",
          "base",
          "col",
          "embed",
          "param",
          "source",
          "track",
          "wbr",
        ].includes(tag.toLowerCase());

      // when the user enters '>'
      if (event.browserEvent.key === ">") {
        const currentSelections = editor.getSelections();
        if (!currentSelections) return;

        const edits = [];
        const newSelections = [];

        for (const selection of currentSelections) {
          // shift the selection over by one to account for the new character
          newSelections.push(
            new monaco.Selection(
              selection.selectionStartLineNumber,
              selection.selectionStartColumn + 1,
              selection.endLineNumber,
              selection.endColumn + 1
            )
          );

          // grab the content before the cursor
          const contentBeforeChange = model.getValueInRange({
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: selection.endLineNumber,
            endColumn: selection.endColumn,
          });

          // Match JSX tags including dot notation like <Block.Card>
          const match = contentBeforeChange.match(
            /<([\w.]+)(?![^>]*\/>)[^>]*$/
          );
          if (!match) continue;

          const [fullMatch, tag] = match;

          // skip self-closing tags or tags that already end with /
          if (isSelfClosing(tag) || fullMatch.trim().endsWith("/")) {
            continue;
          }

          // add in the closing tag
          edits.push({
            range: {
              startLineNumber: selection.endLineNumber,
              startColumn: selection.endColumn + 1, // add 1 to offset for the inserting '>' character
              endLineNumber: selection.endLineNumber,
              endColumn: selection.endColumn + 1,
            },
            text: `</${tag}>`,
          });
        }

        // wait for next tick to avoid it being an invalid operation
        setTimeout(() => {
          editor.executeEdits(model.getValue(), edits, newSelections);
        }, 0);
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
      }}
      onChange={onChange}
      onMount={handleMount}
    />
  );
}
