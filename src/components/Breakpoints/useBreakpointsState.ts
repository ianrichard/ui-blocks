import { useEffect, useState } from "react";
import { BREAKPOINTS } from "./breakpoints";

export function useBreakpointsState(): { activeBreakpoints: string[] } {
  const getActiveBreakpoints = () => {
    const width = window.innerWidth;
    // Return all breakpoints that match (from lowest to highest)
    return BREAKPOINTS.filter((breakpoint) => width >= breakpoint.value).map(
      (breakpoint) => breakpoint.key
    );
  };

  const [activeBreakpoints, setActiveBreakpoints] = useState<string[]>(() =>
    getActiveBreakpoints()
  );

  useEffect(() => {
    const handleResize = () => {
      const next = getActiveBreakpoints();
      setActiveBreakpoints((prev) => {
        if (prev.join() === next.join()) return prev;
        return next;
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { activeBreakpoints };
}
