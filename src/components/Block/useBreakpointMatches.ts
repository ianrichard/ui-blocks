import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export interface BreakpointMatch {
  key: string;
  matches: boolean;
}

export function useBreakpointMatches(): BreakpointMatch[] {
  const theme = useMantineTheme();
  const queries = [
    { key: "", query: undefined },
    { key: "Xs", query: `(max-width: ${theme.breakpoints.xs})` },
    {
      key: "Sm",
      query: `(min-width: ${theme.breakpoints.xs}) and (max-width: ${theme.breakpoints.sm})`,
    },
    {
      key: "Md",
      query: `(min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.md})`,
    },
    {
      key: "Lg",
      query: `(min-width: ${theme.breakpoints.md}) and (max-width: ${theme.breakpoints.lg})`,
    },
    { key: "Xl", query: `(min-width: ${theme.breakpoints.lg})` },
  ];
  // Call useMediaQuery for each breakpoint in a fixed order
  const matches = [
    true, // base always matches
    useMediaQuery(queries[1].query!),
    useMediaQuery(queries[2].query!),
    useMediaQuery(queries[3].query!),
    useMediaQuery(queries[4].query!),
    useMediaQuery(queries[5].query!),
  ];
  return queries.map((bp, i) => ({ key: bp.key, matches: matches[i] }));
}
