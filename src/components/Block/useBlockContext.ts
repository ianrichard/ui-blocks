import { useContext } from "react";
import type { MantineSize } from "@mantine/core";
import { BlockContext } from "./BlockContext";
import type { BlockContextValue } from "./Block.types";

export function useBlockContext(): BlockContextValue {
  return useContext(BlockContext) as BlockContextValue;
}

export function useBlockSize(size?: MantineSize) {
  const context = useBlockContext();
  return size || context.size || "md";
}
