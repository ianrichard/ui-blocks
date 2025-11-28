import { useBreakpointsState } from "./useBreakpointsState";
import { type ReactNode } from "react";
import { BreakpointsContext } from "./BreakpointsContext";

export function BreakpointsProvider({ children }: { children: ReactNode }) {
  const { activeBreakpoints } = useBreakpointsState();
  return (
    <BreakpointsContext.Provider value={{ activeBreakpoints }}>
      {children}
    </BreakpointsContext.Provider>
  );
}
