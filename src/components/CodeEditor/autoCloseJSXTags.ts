const SELF_CLOSING_TAGS = [
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
];

function isSelfClosing(tag: string): boolean {
  return SELF_CLOSING_TAGS.includes(tag.toLowerCase());
}

export function setupAutoCloseJSXTags(editor: any, monaco: any) {
  editor.onKeyDown((event: any) => {
    const model = editor.getModel();
    if (!model) return;

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
        const match = contentBeforeChange.match(/<([\w.]+)(?![^>]*\/>)[^>]*$/);
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
}
