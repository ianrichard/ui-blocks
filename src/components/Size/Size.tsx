import type { ReactNode } from "react";
import { resolveSizeProp } from "./resolveSizeProp";
import { BlockProvider } from "../Block/BlockSizeContext";
import type { SizeProps } from "./sizeTypes";

interface SizeComponentProps extends SizeProps {
  children: ReactNode;
}

const Size = ({ children, ...rest }: SizeComponentProps) => {
  const size = resolveSizeProp(rest);
  return <BlockProvider value={{ size }}>{children}</BlockProvider>;
};

export default Size;
