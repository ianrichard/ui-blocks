import { useBlockSize } from "../Block/useBlockContext";
import { resolveSizeProp, type SizeResolvableProps } from "./resolveSizeProp";

export function useSizeProp(props: SizeResolvableProps) {
  const contextSize = useBlockSize();
  return resolveSizeProp(props, String(contextSize));
}

export type { SizeResolvableProps };
