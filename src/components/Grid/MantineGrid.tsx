import React from "react";
import { Grid, SimpleGrid } from "@mantine/core";
import { useResponsiveColsProp } from "../Block/useResponsiveColsProp";
import type { ResponsiveColsProps } from "../Block/useResponsiveColsProp";

import styles from "./MantineGrid.module.scss";

export interface MantineGridProps extends ResponsiveColsProps {
  children: React.ReactNode;
}

export const MantineGrid = (props: MantineGridProps) => {
  const { children, cols } = props;

  return (
    <>
      {cols ? (
        <SimpleGrid className={styles.grid} cols={3}>
          {children}
        </SimpleGrid>
      ) : (
        <Grid className={styles.grid}>{children}</Grid>
      )}
    </>
  );
};

export const MantineGridItem = (props: MantineGridProps) => {
  const { children, ...colsProps } = props;
  const cols = useResponsiveColsProp(colsProps) || 1;
  return (
    <Grid.Col span={cols} {...colsProps}>
      {children}
    </Grid.Col>
  );
};
