import { useContext } from "react";
import { BreakpointContext } from "./BreakpointContext.ts";

export function useBreakpointContext() {
  const ctx = useContext(BreakpointContext);
  if (!ctx)
    throw new Error(
      "useBreakpointContext must be used within a BreakpointProvider"
    );
  return ctx;
}
