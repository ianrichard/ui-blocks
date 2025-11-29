import { forwardRef } from "react";
import type { MantineSize } from "@mantine/core";
import { useBlockSize } from "./useBlockContext";
import type { BlockInputProps } from "./Block.types";

export function withBlockSize<
  P extends { textSize?: MantineSize } & BlockInputProps,
  R = unknown
>(Component: React.ComponentType<P & { ref?: React.Ref<R> }>) {
  const Wrapped = forwardRef<R, P>((props, ref) => {
    const resolvedSize = useBlockSize(
      (props.textSize as MantineSize) ?? undefined
    );
    return <Component {...(props as P)} textSize={resolvedSize} ref={ref} />;
  });
  Wrapped.displayName = `withBlockSize(${
    Component.displayName || Component.name
  })`;
  return Wrapped;
}
