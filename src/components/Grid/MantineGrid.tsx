import React from "react";
import { Grid } from "@mantine/core";
import { useResponsiveColsProp } from "../Block/useResponsiveColsProp";
import type { ResponsiveColsProps } from "../Block/useResponsiveColsProp";
import { withBlockSize } from "../withBlockSize";
import type { MantineSize } from "@mantine/core";
import styles from "./MantineGrid.module.scss";
import MantineBlock from "../Block/MantineBlock";

export interface MantineGridProps extends ResponsiveColsProps {
  children: React.ReactNode;
  size?: MantineSize;
}

const MantineGridBase = (props: MantineGridProps) => {
  const { children, size = "md", ...rest } = props;
  return (
    <MantineBlock component={Grid} gutter={size} {...rest} verticalSpace>
      {children}
    </MantineBlock>
  );
};

export const MantineGrid = withBlockSize(MantineGridBase);

export const MantineGridItem = (props: MantineGridProps) => {
  const { children, ...colsProps } = props;
  const cols = useResponsiveColsProp(colsProps) || 1;
  return (
    <Grid.Col className={styles.gridItem} span={cols} {...colsProps}>
      {children}
    </Grid.Col>
  );
};
