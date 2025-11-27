import { forwardRef } from "react";
import { useBlockSize } from "./Block/useBlockContext";
import type { MantineSize } from "@mantine/core";

export function withBlockSize<
  Props extends { size?: MantineSize; children?: React.ReactNode } & Record<
    string,
    unknown
  >,
  RefType = unknown
>(Component: React.ComponentType<Props>) {
  return forwardRef<RefType, Props>((props, ref) => {
    const { size, ...rest } = props;
    const resolvedSize = useBlockSize(size as MantineSize | undefined);
    const mergedProps = {
      ...rest,
      size: resolvedSize,
      ref,
    } as unknown as Props;
    return <Component {...mergedProps} />;
  });
}
