import Block from "..";
import MantineModal from "../Modal/MantineModal";
import { useState, type ReactNode } from "react";
import { extractAppShellChildren } from "./extractAppShellChildren";
import { NavHeaderMobile } from "../Nav/NavHeaderMobile";

interface AppShellMobileProps {
  children: ReactNode;
}

export function AppShellMobile({ children }: AppShellMobileProps) {
  const [opened, setOpened] = useState(false);
  const { header, nav, content } = extractAppShellChildren(children);
  return (
    <>
      <Block.Section
        innerSpace
        borderBottom
        backgroundSecondary
        style={{ position: "sticky", top: 0, zIndex: 1 }}
      >
        <NavHeaderMobile opened={opened} onClick={() => setOpened(true)}>
          {header}
        </NavHeaderMobile>
      </Block.Section>
      <Block.Section innerSpaceLeft innerSpaceRight>
        {content}
      </Block.Section>
      <MantineModal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Block UI"
        centered
      >
        {nav}
      </MantineModal>
    </>
  );
}
