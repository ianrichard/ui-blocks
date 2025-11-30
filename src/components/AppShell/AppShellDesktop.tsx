import type { ReactNode } from "react";
import Block from "..";
import { NavItems, type NavItemsProps } from "../Nav/NavItems";
import { NavHeaderDesktop } from "../Nav/NavHeaderDesktop";

interface AppShellDesktopProps extends NavItemsProps {
  header: ReactNode;
  children: ReactNode;
}

export function AppShellDesktop({
  navItems,
  onSelect,
  header,
  children,
}: AppShellDesktopProps) {
  return (
    <Block.Section row>
      <Block.Section borderRight minWidth={280}>
        <Block.Section
          style={{
            position: "sticky",
            top: 0,
          }}
        >
          <Block.Section
            innerSpaceTop="lg"
            innerSpaceLeftRight="lg"
            innerSpaceBottom="md"
          >
            <NavHeaderDesktop>{header}</NavHeaderDesktop>
          </Block.Section>
          <Block.Section>
            <NavItems navItems={navItems} onSelect={onSelect} />
          </Block.Section>
        </Block.Section>
      </Block.Section>
      <Block.Section
        minWidth={0}
        maxWidth={1280}
        innerSpaceLeft="xl"
        innerSpaceRight="xl"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {children}
      </Block.Section>
    </Block.Section>
  );
}
