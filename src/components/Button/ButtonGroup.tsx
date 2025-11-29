import MantineBlock from "../Block/MantineBlock";
import type { ReactNode } from "react";
import { withBlockSize } from "../Block/withBlockSize";
import type { TextSizeInputProp } from "../Block/Block.types";

interface ButtonGroupProps {
  textSize?: TextSizeInputProp;
  children?: ReactNode;
}

const ButtonGroupBase = ({
  children,
  textSize = "md",
  ...rest
}: ButtonGroupProps) => {
  const gap = ["xs", "sm", "md"].includes(textSize) ? "xs" : "md";
  return (
    <MantineBlock row gap={gap} wrap="wrap" mt={gap} {...rest}>
      {children}
    </MantineBlock>
  );
};

const ButtonGroup = withBlockSize(ButtonGroupBase);

export default ButtonGroup;
