import { useResponsiveProp } from "./useResponsiveProp";

export interface ResponsiveHeightProps {
  height?: string | number;
  heightXs?: string | number;
  heightSm?: string | number;
  heightMd?: string | number;
  heightLg?: string | number;
  heightXl?: string | number;
}

export function useResponsiveHeightProp(props: ResponsiveHeightProps) {
  return useResponsiveProp<string | number>("height", props);
}
