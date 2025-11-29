import { useContext } from "react";
import type { BlockContextValue, BlockInputProps } from "./Block.types";
import { BlockContext } from "./BlockContext";

export function useBlockContext(): BlockContextValue {
  return useContext(BlockContext) as BlockContextValue;
}

export function useSizeFromPropOrContext(props: BlockInputProps) {
  const blockContext = useBlockContext();

  if (props.size) return props.size;
  if (props.sizeCompact) return "xs";
  if (props.sizeCozy) return "xl";
  else if (blockContext.size) return blockContext.size;
}
