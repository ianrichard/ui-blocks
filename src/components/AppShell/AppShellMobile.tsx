import Block from "..";
import MantineModal from "../Modal/MantineModal";
import type { ReactNode } from "react";
import { extractAppShellChildren } from "./extractAppShellChildren";
import { NavHeaderMobile } from "../Nav/NavHeaderMobile";
import { useAppShellMobileNav } from "./AppShellMobileNavContext";

interface AppShellMobileProps {
  children: ReactNode;
}

export function AppShellMobile({ children }: AppShellMobileProps) {
  const { opened, setOpened } = useAppShellMobileNav();
  const { header, nav, content } = extractAppShellChildren(children);
  return (
    <>
      <Block.Section
        innerSpace
        borderBottom
        backgroundSecondary
        // style={{ position: "sticky", top: 0, zIndex: 1 }}
        sticky
        background
        frost="xs"
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
        drawer
        width="100%"
        maxWidth={320}
      >
        {nav}
      </MantineModal>
    </>
  );
}
