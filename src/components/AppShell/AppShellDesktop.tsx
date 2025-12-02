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
      <Block.Section innerSpace="xl" minWidth={280} height="100vh" sticky>
        <Block.Card
          style={
            {
              // background: "#050505",
              // marginTop: "32px !important",
              // borderRadius: 16,
            }
          }
          frost="xl"
          // innerSpaceTop="xs"
          innerSpaceBottom="xs"
          // height="-webkit-fill-available"
        >
          <Block.Section innerSpace>
            <NavHeaderDesktop>{header}</NavHeaderDesktop>
          </Block.Section>
          {nav}
        </Block.Card>
      </Block.Section>
      <Block.Section
        // minWidth={0}
        fillSpace
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
