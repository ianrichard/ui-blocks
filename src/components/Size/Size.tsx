import type { ReactNode } from "react";
import { resolveSizeProp, type SizeResolvableProps } from "./resolveSizeProp";
import { BlockProvider } from "../Abstract/BlockContext";

interface SizeProps extends SizeResolvableProps {
  children: ReactNode;
}

const Size = ({ children, ...rest }: SizeProps) => {
  const size = resolveSizeProp(rest);
  return <BlockProvider value={{ size }}>{children}</BlockProvider>;
};

export default Size;
