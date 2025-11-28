import { useBlockSize } from "../Block/useBlockContext";
import { resolveSizeProp } from "./resolveSizeProp";
import type { SizeProps } from "./sizeTypes";

export function useSizeProp(props: SizeProps) {
  const contextSize = useBlockSize();
  return resolveSizeProp(props, contextSize);
}

export type { SizeProps };
