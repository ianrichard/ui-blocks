import React from "react";
import { Grid } from "@mantine/core";
import type { ResponsiveColumnsProps } from "../Block/useResponsiveColumnsProp";
import { withBlockSize } from "../withBlockSize";
import type { MantineSize } from "@mantine/core";
import styles from "./MantineGrid.module.scss";
import MantineBlock from "../Block/MantineBlock";
import { useAbstractToMantineProps } from "../Block/useAbstractToMantineProps";

export interface MantineGridProps extends ResponsiveColumnsProps {
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
  const { children, ...columnsProps } = props;
  const { columns } = useAbstractToMantineProps(columnsProps);
  return (
    <Grid.Col className={styles.gridItem} span={columns} {...columnsProps}>
      {children}
    </Grid.Col>
  );
};
