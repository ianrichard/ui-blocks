import { BlockProvider } from "./Block/BlockContext";
import type { ReactNode } from "react";

interface SizeProps {
  children: ReactNode;
  [key: string]: any;
}

const Size = ({ children, ...rest }: SizeProps) => {
  // Find the first key that is not 'children' (e.g., 'lg', 'md', etc.)
  const sizeKey = Object.keys(rest).find((k) => k !== "children");
  const size = sizeKey || rest.size;
  return <BlockProvider value={{ size }}>{children}</BlockProvider>;
};

export default Size;
