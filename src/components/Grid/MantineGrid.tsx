import React from "react";
import { Grid } from "@mantine/core";
import { withBlockSize } from "../Block/withBlockSize";
import type { MantineSize } from "@mantine/core";
import styles from "./MantineGrid.module.scss";
import MantineBlock from "../Block/MantineBlock";
import type { ColumnsInputProps } from "../Block/Block.types";
import { useResponsiveProps } from "../Block/useResponsiveProps";

interface MantineGridProps {
  children?: React.ReactNode;
  size?: MantineSize;
}

const MantineGridBase = (props: MantineGridProps) => {
  const { children, size = "md", ...rest } = props;
  return (
    <MantineBlock component={Grid} gutter={size} {...rest} outerSpaceTopBottom>
      {children}
    </MantineBlock>
  );
};

export const MantineGrid = withBlockSize(MantineGridBase);

interface MantineGridItemProps extends ColumnsInputProps {
  children: React.ReactNode;
}

export const MantineGridItem = (props: MantineGridItemProps) => {
  const { columns, ...otherProps } = useResponsiveProps(props);
  return (
    <Grid.Col className={styles.gridItem} span={columns} {...otherProps}>
      {props.children}
    </Grid.Col>
  );
};
