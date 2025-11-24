import { useBreakpointMatches } from "./useBreakpointMatches";

export function useResponsiveProp<T = any>(
  base: string,
  props: Record<string, any>
): T | undefined {
  const matches = useBreakpointMatches();

  // Find the highest active breakpoint
  let highestActive = 0;
  for (let i = matches.length - 1; i >= 0; i--) {
    if (matches[i].matches) {
      highestActive = i;
      break;
    }
  }
  // Check from highest active breakpoint down to base for a matching prop
  for (let i = highestActive; i >= 0; i--) {
    const bpKey = matches[i].key;
    const propName = bpKey ? `${base}${bpKey}` : base;
    if (props[propName] !== undefined) return props[propName];
  }
  return undefined;
}
