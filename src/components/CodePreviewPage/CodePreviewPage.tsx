import { useEffect, useState } from "react";
import { decodeBase64 } from "./utils";
import JSXRenderer from "./JSXRenderer";
import Block from "..";

export default function CodePreviewPage() {
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data && typeof event.data.code === "string") {
        try {
          setCode(decodeBase64(event.data.code));
        } catch {
          // ignore
        }
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return <JSXRenderer code={code} components={{ Block }} />;
}
