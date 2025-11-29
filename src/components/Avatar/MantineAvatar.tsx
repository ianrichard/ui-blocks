import { forwardRef } from "react";
import { Avatar as MantineAvatarComponent } from "@mantine/core";
import type { SizeInputProps } from "../Block/Block.types";

export interface AvatarProps extends SizeInputProps {
  url?: string;
  alt?: string;
}

const MantineAvatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      url = "https://placehold.co/100x100",
      size = "md",
      alt = "Avatar",
      sizeXs,
      sizeSm,
      sizeMd,
      sizeLg,
      sizeXl,
    },
    ref
  ) => {
    // Determine size from boolean props
    let finalSize = size;
    if (sizeXs) finalSize = "xs";
    if (sizeSm) finalSize = "sm";
    if (sizeMd) finalSize = "md";
    if (sizeLg) finalSize = "lg";
    if (sizeXl) finalSize = "xl";

    // Map sizes to pixel values
    const sizeMap: Record<string, number> = {
      xxs: 16,
      xs: 24,
      sm: 32,
      md: 40,
      lg: 56,
      xl: 72,
      xxl: 96,
    };

    return (
      <MantineAvatarComponent
        ref={ref}
        src={url}
        alt={alt}
        size={sizeMap[finalSize]}
        radius="xl"
      />
    );
  }
);

MantineAvatar.displayName = "Block.Avatar";

export default MantineAvatar;
