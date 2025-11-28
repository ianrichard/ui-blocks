import { useEffect, useState, type ReactNode } from "react";
import { BreakpointContext } from "./BreakpointContext";

const BREAKPOINTS = [
  { key: "base", value: 0 },
  { key: "xs", value: 576 },
  { key: "sm", value: 768 },
  { key: "md", value: 992 },
  { key: "lg", value: 1200 },
  { key: "xl", value: 1408 },
];

export function BreakpointProvider({ children }: { children: ReactNode }) {
  const getActiveBreakpoints = () => {
    const width = window.innerWidth;
    return BREAKPOINTS.filter((bp) => width >= bp.value).map((bp) => bp.key);
  };

  const [activeBreakpoints, setActiveBreakpoints] = useState<string[]>(() =>
    getActiveBreakpoints()
  );

  useEffect(() => {
    const handleResize = () => {
      setActiveBreakpoints(getActiveBreakpoints());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BreakpointContext.Provider value={{ activeBreakpoints }}>
      {children}
    </BreakpointContext.Provider>
  );
}
