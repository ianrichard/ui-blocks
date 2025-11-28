import React from "react";
import type { ReactElement, ReactNode } from "react";
import { Tabs as MantineTabs } from "@mantine/core";
import MantineIcon from "../Icon/MantineIcon";
import MantineSection from "../Section/MantineSection";

interface TabProps {
  children: ReactNode;
  icon?: ReactNode;
  value?: string;
}

interface TabPanelProps {
  children: ReactNode;
  value?: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Tab(props: TabProps) {
  return <>{props.children}</>;
}

export function TabPanel(props: TabPanelProps) {
  return <>{props.children}</>;
}

interface TabsProps {
  children: ReactNode;
  defaultValue?: string;
}

export default function Tabs({ children, defaultValue }: TabsProps) {
  console.log(children);
  function getTabIcon(icon: unknown): ReactNode {
    if (typeof icon === "string") {
      try {
        return <MantineIcon name={icon} size=".4em" mb={0} />;
      } catch {
        return null;
      }
    }
    return icon as ReactNode;
  }

  // Memoize tab and panel values for stability
  const { tabElements, panelElements, firstValue } = React.useMemo(() => {
    const tabNodes: ReactElement<TabProps>[] = [];
    const panelNodes: ReactElement<TabPanelProps>[] = [];
    React.Children.toArray(children).forEach((child) => {
      if (!React.isValidElement(child)) return;
      if (child.type === Tab) tabNodes.push(child as ReactElement<TabProps>);
      if (child.type === TabPanel)
        panelNodes.push(child as ReactElement<TabPanelProps>);
    });

    const tabElements = tabNodes.map((tab, i) => {
      const label =
        typeof tab.props.children === "string"
          ? tab.props.children
          : `Tab ${i + 1}`;
      const value = tab.props.value || slugify(label);
      const icon = getTabIcon(tab.props.icon);
      return (
        <MantineTabs.Tab
          key={tab.key ?? value}
          value={value}
          leftSection={icon}
          style={{
            fontSize: "1.05rem",
            fontWeight: 600,
          }}
        >
          {label}
        </MantineTabs.Tab>
      );
    });

    const panelElements = panelNodes.map((panel, i) => {
      const value =
        panel.props.value || tabElements[i]?.props.value || `panel-${i}`;
      return (
        <MantineTabs.Panel value={value} key={panel.key ?? value}>
          {panel.props.children}
        </MantineTabs.Panel>
      );
    });

    const maxLen = Math.max(tabElements.length, panelElements.length);
    while (tabElements.length < maxLen) {
      const value = `tab-${tabElements.length + 1}`;
      tabElements.push(
        <MantineTabs.Tab value={value} key={value}>
          <MantineSection outerSpaceTop outerSpaceBottom>
            Missing tab
          </MantineSection>
        </MantineTabs.Tab>
      );
    }
    while (panelElements.length < maxLen) {
      const value =
        tabElements[panelElements.length]?.props.value ||
        `panel-${panelElements.length + 1}`;
      panelElements.push(
        <MantineTabs.Panel value={value} key={value}>
          <MantineSection outerSpaceTop outerSpaceBottom>
            Missing panel content
          </MantineSection>
        </MantineTabs.Panel>
      );
    }

    const firstValue = tabElements[0]?.props.value;
    return { tabElements, panelElements, firstValue };
  }, [children]);

  return (
    <MantineTabs defaultValue={defaultValue || firstValue}>
      <MantineTabs.List>{tabElements}</MantineTabs.List>
      {panelElements}
    </MantineTabs>
  );
}

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
