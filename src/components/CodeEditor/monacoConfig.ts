export function configureMonacoForJSX(monaco: any, typeDefinitions?: string) {
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

  // Add custom type definitions
  const defaultTypes = ``;
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    typeDefinitions || defaultTypes,
    "file:///node_modules/@types/components.d.ts"
  );
}
