import { forwardRef } from "react";
import { Image as MantineImageComponent } from "@mantine/core";
import type {
  HeightResponsiveProps,
  WidthResponsiveProps,
} from "../Block/Block.types";
import { useResponsiveProps } from "../Block/useResponsiveProps";

export interface ImageProps
  extends WidthResponsiveProps,
    HeightResponsiveProps {
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
      ...other
    },
    ref
  ) => {
    const { width, height } = useResponsiveProps(other);
    return (
      <MantineImageComponent
        ref={ref}
        src={url}
        alt={alt}
        w={width}
        h={height}
        maw={maxWidth}
        fit={cover ? "cover" : "contain"}
      />
    );
  }
);

MantineImage.displayName = "Block.Image";

export default MantineImage;
