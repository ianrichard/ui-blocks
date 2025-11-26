import { useResponsiveProp } from "./useResponsiveProp";

export interface ResponsiveWidthProps {
  width?: string | number;
  widthXs?: string | number;
  widthSm?: string | number;
  widthMd?: string | number;
  widthLg?: string | number;
  widthXl?: string | number;
}

export function useResponsiveWidthProp(props: ResponsiveWidthProps) {
  return useResponsiveProp<string | number>("width", props);
}
