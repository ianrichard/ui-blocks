import { useBreakpointMatches } from "./useBreakpointMatches";

export function useResponsiveProp<
  Props extends Record<string, unknown>,
  K extends keyof Props = keyof Props
>(base: string, props: Props): Props[K] | undefined {
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
    if (props[propName as K] !== undefined) return props[propName as K];
  }
  return undefined;
}
