import { createContext } from "react";

export interface BreakpointContextValue {
  activeBreakpoints: string[];
}

export const BreakpointContext = createContext<
  BreakpointContextValue | undefined
>(undefined);
