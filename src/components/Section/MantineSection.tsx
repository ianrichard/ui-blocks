import MantineBlock from "../Block/MantineBlock";
import type { BlockInputProps } from "../Block/Block.types";
import classNames from "classnames";
import { withBlockSize } from "../Block/withBlockSize";

import styles from "./Section.module.scss";
import type { ReactNode } from "react";

interface MantineSectionBaseProps extends BlockInputProps {
  children: ReactNode;
}

const MantineSectionBase = (props: MantineSectionBaseProps) => {
  const { className, children, ...other } = props;
  return (
    <MantineBlock className={classNames(styles.section, className)} {...other}>
      {children}
    </MantineBlock>
  );
};

const MantineSection = withBlockSize<MantineSectionBaseProps>(
  MantineSectionBase
) as React.FC<MantineSectionBaseProps>;

export default MantineSection;
