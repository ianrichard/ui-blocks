import React from "react";
import { Grid } from "@mantine/core";
import { withBlockSize } from "../Block/withBlockSize";
import type { MantineSize } from "@mantine/core";
import styles from "./MantineGrid.module.scss";
import MantineBlock from "../Block/MantineBlock";
import { useAbstractToMantineProps } from "../Block/useAbstractToMantineProps";
import type { ColumnsInputProps } from "../Block/Block.types";

interface MantineGridProps {
  children?: React.ReactNode;
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

interface MantineGridItemProps extends ColumnsInputProps {
  children: React.ReactNode;
}

export const MantineGridItem = (props: MantineGridItemProps) => {
  const { children, ...columnsProps } = props;
  const { columns, otherProps } = useAbstractToMantineProps(columnsProps);
  return (
    <Grid.Col className={styles.gridItem} span={columns} {...otherProps}>
      {children}
    </Grid.Col>
  );
};
