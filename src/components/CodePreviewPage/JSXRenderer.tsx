import React, { useState, useEffect } from "react";
import { transform } from "@babel/standalone";
import scopeEval from "./scopeEval";
import styles from "./JSXRenderer.module.scss";

interface JSXRendererProps {
  code: string;
  components?: Record<string, unknown>;
}

type RenderState = {
  node: React.ReactNode;
  error: boolean;
};

const JSXRenderer = ({ code = "", components = {} }: JSXRendererProps) => {
  const [renderState, setRenderState] = useState<RenderState>({
    node: <p>Loading...</p>,
    error: false,
  });

  useEffect(() => {
    try {
      const jsxToJavaScriptString =
        transform(`<>${code}</>`, {
          presets: ["react"],
        }).code || "";

      const renderedReactCode = scopeEval(jsxToJavaScriptString, {
        React,
        ...components,
      });

      setRenderState({ node: renderedReactCode, error: false });
    } catch {
      setRenderState((prev) => ({ node: prev.node, error: true }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <>
      {renderState.node}
      {renderState.error && <p className={styles.error}>Invalid syntax</p>}
    </>
  );
};

export default JSXRenderer;
