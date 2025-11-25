import { BlockProvider } from "./BlockContext";
import type { ReactNode } from "react";

interface OptionalBlockProviderProps {
  size?: string | number;
  children: ReactNode;
}

const OptionalBlockProvider = ({
  size,
  children,
}: OptionalBlockProviderProps) => {
  // Only provide context if size is not undefined, null, or empty string
  if (size !== undefined && size !== null && size !== "") {
    const blockContextSize = typeof size === "number" ? String(size) : size;
    return (
      <BlockProvider value={{ size: blockContextSize }}>
        {children}
      </BlockProvider>
    );
  }
  return <>{children}</>;
};

export default OptionalBlockProvider;
