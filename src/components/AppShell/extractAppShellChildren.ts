import type { ReactNode } from "react";
import { isValidElement } from "react";
import { AppShellHeader, AppShellNav, AppShellContent } from "./AppShell";

export function extractAppShellChildren(children: ReactNode) {
  let header: ReactNode = null;
  let nav: ReactNode = null;
  let content: ReactNode = null;

  const childArray = Array.isArray(children) ? children : [children];
  childArray.forEach((child) => {
    if (isValidElement(child)) {
      const element = child as React.ReactElement<{ children: ReactNode }>;
      if (element.type === AppShellHeader) header = element.props.children;
      if (element.type === AppShellNav) nav = element.props.children;
      if (element.type === AppShellContent) content = element.props.children;
    }
  });

  return { header, nav, content };
}
