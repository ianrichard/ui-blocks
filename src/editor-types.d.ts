declare namespace React {
  type ReactNode = any;
  type FC<P = {}> = (props: P) => ReactElement | null;
  interface ReactElement {}
  interface CSSProperties {
    [key: string]: any;
  }
}

interface BlockProps {
  // Children and basics
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;

  // Layout
  column?: boolean;
  row?: boolean;
  fillSpace?: boolean;

  // Spacing
  gap?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  innerSpace?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  innerSpaceTop?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  innerSpaceBottom?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  innerSpaceLeft?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  innerSpaceRight?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  outerSpace?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  outerSpaceTop?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  outerSpaceBottom?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  outerSpaceLeft?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  outerSpaceRight?: boolean | "xs" | "sm" | "md" | "lg" | "xl";

  // Sizing
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;

  // Alignment
  alignCenter?: boolean;
  alignMiddle?: boolean;
  alignLeft?: boolean;
  alignRight?: boolean;
  alignBottom?: boolean;

  // Background
  backgroundSecondary?: boolean;
  backgroundInverse?: boolean;
  background?: boolean;
  backgroundImage?: string;

  // Border
  border?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;

  // Other
  sticky?: boolean;
  frost?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
}

declare const Block: {
  Section: React.FC<BlockProps>;
  Card: React.FC<BlockProps>;
  Button: React.FC<BlockProps>;
  Text: React.FC<BlockProps>;
  Title: React.FC<BlockProps>;
  Image: React.FC<BlockProps>;
  Link: React.FC<BlockProps>;
  Avatar: React.FC<BlockProps>;
  Grid: React.FC<BlockProps>;
  GridItem: React.FC<BlockProps>;
  Icon: React.FC<BlockProps>;
  UtilityIcon: React.FC<BlockProps>;
  Input: React.FC<BlockProps>;
  Badge: React.FC<BlockProps>;
  Markdown: React.FC<BlockProps>;
  Modal: React.FC<BlockProps>;
  Alert: React.FC<BlockProps>;
  Accordion: React.FC<BlockProps>;
  ButtonGroup: React.FC<BlockProps>;
  Tabs: React.FC<BlockProps>;
  Tab: React.FC<BlockProps>;
  TabPanel: React.FC<BlockProps>;
  AccordionItem: React.FC<BlockProps>;
  AccordionControl: React.FC<BlockProps>;
  AccordionPanel: React.FC<BlockProps>;
};
