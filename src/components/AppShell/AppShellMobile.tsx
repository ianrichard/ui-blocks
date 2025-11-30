import Block from "..";
import { NavItems, type NavItemsProps } from "../Nav/NavItems";
import { NavHeaderMobile } from "../Nav/NavHeaderMobile";
import MantineModal from "../Modal/MantineModal";
import { useState, type MouseEvent, type ReactNode } from "react";

interface AppShellMobileProps extends NavItemsProps {
  header: ReactNode;
  children: ReactNode;
}

export function AppShellMobile({
  navItems,
  onSelect,
  header,
  children,
}: AppShellMobileProps) {
  const [opened, setOpened] = useState(false);
  const handleSelect = (e: MouseEvent) => {
    if (onSelect) onSelect(e);
    setOpened(false);
  };
  return (
    <>
      <Block.Section
        innerSpace
        borderBottom
        backgroundSecondary
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <NavHeaderMobile opened={opened} onMenuClick={() => setOpened(true)}>
          {header}
        </NavHeaderMobile>
      </Block.Section>
      <Block.Section innerSpaceLeft innerSpaceRight>
        {children}
      </Block.Section>
      <MantineModal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Block UI"
        centered
      >
        <NavItems navItems={navItems} onSelect={handleSelect} />
      </MantineModal>
    </>
  );
}
