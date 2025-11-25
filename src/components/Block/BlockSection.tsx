import MantineBlock from "./MantineBlock";
import type { BlockProps } from "./Block.types";

const BlockSection = (props: BlockProps) => {
  const { inset, children, ...rest } = props;
  return (
    <MantineBlock inset={inset} {...rest}>
      {children}
    </MantineBlock>
  );
};

export default BlockSection;
