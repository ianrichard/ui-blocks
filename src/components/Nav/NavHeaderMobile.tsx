import Block from "..";
import { Burger } from "@mantine/core";
import type { ReactNode } from "react";

interface NavHeaderMobileProps {
  opened: boolean;
  onMenuClick: () => void;
  children?: ReactNode;
}

export function NavHeaderMobile({
  opened,
  onMenuClick,
  children,
}: NavHeaderMobileProps) {
  return (
    <Block.Title row gap="xs">
      <Burger opened={opened} onClick={onMenuClick} size="sm" />
      {children}
    </Block.Title>
  );
}
