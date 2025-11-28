import { useContext } from "react";
import { BreakpointsContext } from "./BreakpointsContext.ts";

export function useBreakpointsContext() {
  const context = useContext(BreakpointsContext);
  if (!context)
    throw new Error(
      "useBreakpointsContext must be used within a BreakpointsProvider"
    );
  return context;
}
