import { Title } from "@mantine/core";
import type { TitleProps } from "@mantine/core";
import { forwardRef } from "react";
import type { ReactNode } from "react";

interface MantineTitleProps extends TitleProps {
  children?: ReactNode;
}

const MantineTitle = forwardRef<HTMLHeadingElement, MantineTitleProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Title ref={ref} order={3} my="-.15em" {...rest}>
        {children}
      </Title>
    );
  }
);

export default MantineTitle;
