import { useContext } from "react";
import type { MantineSize } from "@mantine/core";
import { BlockContext } from "./BlockContext";

export function useBlockContext() {
  return useContext(BlockContext);
}

export function useBlockSize(size?: MantineSize) {
  const context = useBlockContext();
  return size || context.size || "md";
}
