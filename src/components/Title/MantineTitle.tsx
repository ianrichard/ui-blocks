import { Title } from "@mantine/core";
import type { TitleProps } from "@mantine/core";
import { forwardRef } from "react";
import type { ReactNode } from "react";
import MantineBlock from "../Block/MantineBlock";
import styles from "./Title.module.scss";
import { getExclusiveProp } from "../../utils/mutuallyExclusiveProps";
import classNames from "classnames";

interface MantineTitleProps extends TitleProps {
  children?: ReactNode;
  hero?: boolean;
  level1?: boolean;
  level2?: boolean;
  level3?: boolean;
  level4?: boolean;
  level5?: boolean;
  level6?: boolean;
}

const MantineTitle = forwardRef<HTMLHeadingElement, MantineTitleProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    const exclusiveKey = getExclusiveProp(
      props as Record<string, unknown>,
      ["hero", "level1", "level2", "level3", "level4", "level5", "level6"],
      "MantineTitle"
    );

    let order = 3;
    let levelClass = `level${order}`;
    if (exclusiveKey === "hero") {
      order = 1;
      levelClass = "hero";
    } else if (exclusiveKey && exclusiveKey.startsWith("level")) {
      const num = Number(exclusiveKey.replace("level", ""));
      if (num >= 1 && num <= 6) {
        order = num;
        levelClass = `level${order}`;
      }
    }

    return (
      <MantineBlock
        component={Title}
        ref={ref}
        order={order}
        className={classNames(styles.title, styles[levelClass], className)}
        {...rest}
      >
        {children}
      </MantineBlock>
    );
  }
);

export default MantineTitle;
