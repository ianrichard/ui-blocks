import { useContext } from "react";
import { BlockContext } from "./BlockContext";

export function useBlockContext() {
  return useContext(BlockContext);
}

export function useBlockSize(size?: string | number) {
  const context = useBlockContext();
  return size ?? context.size;
}
