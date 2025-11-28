import { createContext } from "react";

export interface BreakpointsContextValue {
  activeBreakpoints: string[];
}

export const BreakpointsContext = createContext<
  BreakpointsContextValue | undefined
>(undefined);
