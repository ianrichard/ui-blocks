import Block from "..";
import type { ReactNode } from "react";
import { extractAppShellChildren } from "./extractAppShellChildren";
import { NavHeaderDesktop } from "../Nav/NavHeaderDesktop";

interface AppShellDesktopProps {
  children: ReactNode;
}

export function AppShellDesktop({ children }: AppShellDesktopProps) {
  const { header, nav, content } = extractAppShellChildren(children);
  return (
    <Block.Section row>
      <Block.Section borderRight minWidth={280}>
        <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
          <Block.Section innerSpace>
            <NavHeaderDesktop>{header}</NavHeaderDesktop>
          </Block.Section>
          {nav}
        </div>
      </Block.Section>
      <Block.Section
        minWidth={0}
        maxWidth={1280}
        innerSpaceLeft="xl"
        innerSpaceRight="xl"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {content}
      </Block.Section>
    </Block.Section>
  );
}
