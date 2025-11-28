import { useContext } from "react";
import type { MantineSize } from "@mantine/core";
import { BlockSizeContext } from "./BlockSizeContext";

export function useBlockSizeContext() {
  return useContext(BlockSizeContext);
}

export function useBlockSize(size?: MantineSize) {
  const context = useBlockSizeContext();
  return size || context.size || "md";
}
