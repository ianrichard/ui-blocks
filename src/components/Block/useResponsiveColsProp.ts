import { useResponsiveProp } from "./useResponsiveProp";

export interface ResponsiveColsProps {
  cols?: number;
  colsXs?: number;
  colsSm?: number;
  colsMd?: number;
  colsLg?: number;
  colsXl?: number;
}

export function useResponsiveColsProp(props: ResponsiveColsProps) {
  return useResponsiveProp<number>("cols", props);
}
