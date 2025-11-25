import { forwardRef } from "react";
import { Card } from "@mantine/core";
import type { BlockProps } from "../Block/Block.types";
import MantineBlock from "../Block/MantineBlock";
import { useBlockSize } from "../Block/useBlockContext";
import { mapAbstractProp } from "../sizeMap";
import { mantineRadiusMap } from "../mantineMaps";
import type { AbstractSizeType } from "../abstractTypes";
import { DEFAULT_RADIUS } from "../abstractDefaults";
import styles from "./MantineCard.module.css";

export interface CardProps extends BlockProps {
  // shadow?: AbstractSizeType;
  // border?: boolean;
  // href?: string;
  radius?: AbstractSizeType;
  // inset?: boolean;
  size?: AbstractSizeType;
}

const MantineCard = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { children, border = true, radius, size, ...blockProps } = props;

  const renderSize = useBlockSize(size);
  const mantineRadius = mapAbstractProp(
    mantineRadiusMap,
    radius || size,
    DEFAULT_RADIUS
  );
  return (
    <MantineBlock
      className={styles.cardContent}
      withBorder={border}
      ref={ref}
      component={Card}
      radius={mantineRadius}
      my={renderSize}
      size={renderSize}
      {...blockProps}
    >
      {children}
    </MantineBlock>
  );
});

MantineCard.displayName = "MantineCard";

export default MantineCard;
