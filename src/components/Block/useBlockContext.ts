import { useContext } from "react";
import { BlockContext } from "../Abstract/BlockContext";
import type { MantineSize } from "@mantine/core";

export function useBlockContext() {
  return useContext(BlockContext);
}

export function useBlockSize(size?: MantineSize) {
  const context = useBlockContext();
  return size || context.size || "md";
}
