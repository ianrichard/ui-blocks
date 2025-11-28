import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { mantineSizes } from "../Size/resolveSizeProp";

export interface BreakpointMatch {
  key: string;
  matches: boolean;
}

function getHighestBreakpointIndex(matches: { matches: boolean }[]) {
  for (let i = matches.length - 1; i >= 0; i--) {
    if (matches[i].matches) {
      return i;
    }
  }
  return 0;
}

export function useBreakpointsState(): {
  breakpointsState: BreakpointMatch[];
  highestActiveIndex: number;
  activeBreakpoints: string[];
} {
  const theme = useMantineTheme();
  const breakpoints = mantineSizes.map((size) => theme.breakpoints[size]);
  const queries = [
    { key: "", query: undefined },
    { key: "Xs", query: `(max-width: ${breakpoints[0]})` },
    {
      key: "Sm",
      query: `(min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,
    },
    {
      key: "Md",
      query: `(min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
    },
    {
      key: "Lg",
      query: `(min-width: ${breakpoints[2]}) and (max-width: ${breakpoints[3]})`,
    },
    { key: "Xl", query: `(min-width: ${breakpoints[3]})` },
  ];
  // Call useMediaQuery for each breakpoint in a fixed order
  const breakpointMatches = [
    true, // base always matches
    useMediaQuery(queries[1].query!),
    useMediaQuery(queries[2].query!),
    useMediaQuery(queries[3].query!),
    useMediaQuery(queries[4].query!),
    useMediaQuery(queries[5].query!),
  ];
  const breakpointsState = queries.map((bp, i) => ({
    key: bp.key,
    matches: breakpointMatches[i],
  }));
  const highestActiveIndex = getHighestBreakpointIndex(breakpointsState);
  // activeBreakpoints: contiguous keys up to and including highest true (excluding base '')
  let activeBreakpoints: string[] = [];
  if (highestActiveIndex > 0) {
    activeBreakpoints = breakpointsState
      .slice(1, highestActiveIndex + 1)
      .map((bp) => bp.key.toLowerCase());
  }

  console.log(activeBreakpoints);

  return { breakpointsState, highestActiveIndex, activeBreakpoints };
}
