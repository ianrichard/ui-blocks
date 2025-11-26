import { forwardRef } from "react";
import { Image as MantineImageComponent } from "@mantine/core";
import { useResponsiveWidthProp } from "../Block/useResponsiveWidthProp";
import { useResponsiveHeightProp } from "../Block/useResponsiveHeightProp";
import type { ResponsiveWidthProps } from "../Block/useResponsiveWidthProp";
import type { ResponsiveHeightProps } from "../Block/useResponsiveHeightProp";

export interface ImageProps
  extends ResponsiveWidthProps,
    ResponsiveHeightProps {
  url?: string;
  height?: string | number;
  maxWidth?: string | number;
  cover?: boolean;
  alt?: string;
}

const MantineImage = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      url = "/placeholder.jpg",
      maxWidth,
      cover = true,
      alt = "Image",
      ...responsiveProps
    },
    ref
  ) => {
    const width = useResponsiveWidthProp(responsiveProps);
    const height = useResponsiveHeightProp(responsiveProps);
    return (
      <MantineImageComponent
        ref={ref}
        src={url}
        alt={alt}
        w={width}
        h={height}
        maw={maxWidth}
        fit={cover ? "cover" : "contain"}
        {...responsiveProps}
      />
    );
  }
);

MantineImage.displayName = "Block.Image";

export default MantineImage;
