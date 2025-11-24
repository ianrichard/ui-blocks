import { forwardRef } from "react";
import MantineTitle from "../Title/MantineTitle";
import type { TitleProps } from "../Title/MantineTitle";

export interface SubtitleProps extends Omit<TitleProps, "size"> {
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

const MantineSubtitle = forwardRef<HTMLHeadingElement, SubtitleProps>(
  ({ children, size = "md", mb = "md", ...rest }, ref) => {
    return (
      <MantineTitle ref={ref} size={size} mb={mb} {...rest}>
        {children}
      </MantineTitle>
    );
  }
);

MantineSubtitle.displayName = "Block.Subtitle";

export default MantineSubtitle;
