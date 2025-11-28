import type { ReactNode } from "react";
import { resolveSizeProp, type SizeProps } from "./resolveSizeProp";
import { BlockProvider } from "../Block/BlockSizeContext";

interface SizeProps extends SizeProps {
  children: ReactNode;
}

const Size = ({ children, ...rest }: SizeProps) => {
  const size = resolveSizeProp(rest);
  return <BlockProvider value={{ size }}>{children}</BlockProvider>;
};

export default Size;
