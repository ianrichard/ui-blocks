import Block from "..";
import { Burger } from "@mantine/core";
import type { ReactNode } from "react";

interface NavHeaderMobileProps {
  opened: boolean;
  onClick: () => void;
  children?: ReactNode;
}

export function NavHeaderMobile({
  opened,
  onClick,
  children,
}: NavHeaderMobileProps) {
  return (
    <Block.Title row gap="xs">
      <Burger opened={opened} onClick={onClick} size="sm" />
      {children}
    </Block.Title>
  );
}
