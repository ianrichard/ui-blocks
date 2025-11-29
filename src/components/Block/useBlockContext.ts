import { useContext } from "react";
import type { BlockContextValue, BlockInputProps } from "./Block.types";
import { BlockContext } from "./BlockContext";

export function useBlockContext(): BlockContextValue {
  return useContext(BlockContext) as BlockContextValue;
}

export function useSizeFromPropOrContext(props: BlockInputProps) {
  const blockContext = useBlockContext();
  const scaleFromPropOrContext = useScaleFromPropOrContext(props);

  if (props.size) return props.size;
  else if (blockContext.size) return blockContext.size;
  else if (scaleFromPropOrContext) return scaleFromPropOrContext;
}

export function useScaleFromPropOrContext(props: BlockInputProps) {
  const blockContext = useBlockContext();
  if (props.scale) return props.scale;
  if (props.scaleCompact) return "xs";
  if (props.scaleCozy) return "xl";
  if (blockContext.scale) return blockContext.scale;
}
