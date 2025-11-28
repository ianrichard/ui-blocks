import MantineBlock from "../Block/MantineBlock";
import type { BlockInputProps } from "../Block/Block.types";
import classNames from "classnames";
import { withBlockSize } from "../Block/withBlockSize";

import styles from "./Section.module.scss";

const MantineSectionBase = (props: BlockInputProps) => {
  const { className, ...other } = props;
  return (
    <MantineBlock
      className={classNames(styles.section, className)}
      {...other}
    />
  );
};

const MantineSection = withBlockSize(MantineSectionBase);

export default MantineSection;
