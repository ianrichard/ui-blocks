import { useBreakpointsState } from "../Block/useBreakpointsState";
import { type ReactNode } from "react";
import { BreakpointContext } from "./BreakpointContext";

export function BreakpointProvider({ children }: { children: ReactNode }) {
  const { activeBreakpoints } = useBreakpointsState();
  return (
    <BreakpointContext.Provider value={{ activeBreakpoints }}>
      {children}
    </BreakpointContext.Provider>
  );
}
