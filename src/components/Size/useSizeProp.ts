import { useBlockSize } from "../Block/useBlockContext";
import { resolveSizeProp, type SizeProps } from "./resolveSizeProp";

export function useSizeProp(props: SizeProps) {
  const contextSize = useBlockSize();
  return resolveSizeProp(props, String(contextSize));
}

export type { SizeProps };
