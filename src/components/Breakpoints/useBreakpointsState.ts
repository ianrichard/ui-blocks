import { useEffect, useState } from "react";
import { BREAKPOINTS } from "../Block/blockConstants";

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
    let throttleTimeout: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      if (throttleTimeout) return;
      throttleTimeout = setTimeout(() => {
        const next = getActiveBreakpoints();
        setActiveBreakpoints((prev) => {
          if (prev.join() === next.join()) return prev;
          return next;
        });
        throttleTimeout = null;
      }, 10);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  return { activeBreakpoints };
}
