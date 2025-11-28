import { Title } from "@mantine/core";
import type { TitleProps, TitleOrder } from "@mantine/core";
import { forwardRef } from "react";
import type { ReactNode } from "react";
import styles from "./Title.module.scss";
import { getExclusiveProp } from "../../utils/mutuallyExclusiveProps";
import classNames from "classnames";
import { withBlockSize } from "../Block/withBlockSize";
import type { MantineSize } from "@mantine/core";

interface MantineTitleProps extends TitleProps {
  children?: ReactNode;
  hero?: boolean;
  level1?: boolean;
  level2?: boolean;
  level3?: boolean;
  level4?: boolean;
  level5?: boolean;
  level6?: boolean;
  size?: MantineSize;
}

// Utility to omit keys from an object
function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
}

const MantineTitleBase = forwardRef<HTMLHeadingElement, MantineTitleProps>(
  (props, ref) => {
    const { children, className, size = "md", ...rest } = props;
    const exclusiveKey = getExclusiveProp(
      props as Record<string, unknown>,
      ["hero", "level1", "level2", "level3", "level4", "level5", "level6"],
      "MantineTitle"
    );

    let order: TitleOrder = 3;
    let levelClass = `level${order}`;
    if (exclusiveKey === "hero") {
      order = 1;
      levelClass = "hero";
    } else if (exclusiveKey && exclusiveKey.startsWith("level")) {
      const num = Number(exclusiveKey.replace("level", ""));
      if (num >= 1 && num <= 6) {
        order = num as TitleOrder;
        levelClass = `level${order}`;
      }
    }

    const titleProps = omit(rest, [
      "hero",
      "level1",
      "level2",
      "level3",
      "level4",
      "level5",
      "level6",
    ]);

    return (
      <Title
        ref={ref}
        order={order}
        className={classNames(
          styles.title,
          styles[levelClass],
          styles[size],
          className
        )}
        {...titleProps}
      >
        {children}
      </Title>
    );
  }
);

const MantineTitle = withBlockSize(MantineTitleBase);

export default MantineTitle;
