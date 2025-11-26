import { Box, Flex, Grid, type MantineSize } from "@mantine/core";
import type { BlockProps } from "./Block.types";

const MantineBaseComponent = (props: BlockProps & { size?: MantineSize }) => {
  let Component;

  if (props.component) Component = props.component;
  else if (props.grid) Component = Grid;
  else if (props.row || props.column) Component = Flex;
  else {
    Component = Box;
  }

  return <Component {...props} />;
};

export default MantineBaseComponent;
