import BasicCardDemo from "./BasicCardDemo";
import basicCardSource from "./BasicCardDemo.tsx?raw";
import CardWithImageDemo from "./CardWithImageDemo";
import cardWithImageSource from "./CardWithImageDemo.tsx?raw";
import GridLayoutDemo from "./GridLayoutDemo";
import gridLayoutSource from "./GridLayoutDemo.tsx?raw";
import CardWithHeaderDemo from "./CardWithHeaderDemo";
import cardWithHeaderSource from "./CardWithHeaderDemo.tsx?raw";
import BackgroundVariantsDemo from "./BackgroundVariantsDemo";
import backgroundVariantsSource from "./BackgroundVariantsDemo.tsx?raw";
import ButtonVariantsDemo from "./ButtonVariantsDemo";
import buttonVariantsSource from "./ButtonVariantsDemo.tsx?raw";
import MarkdownDemo from "./MarkdownDemo";
import markdownSource from "./MarkdownDemo.tsx?raw";
import TypographyDemo from "./TypographyDemo";
import typographySource from "./TypographyDemo.tsx?raw";

export const Demos = {
  BasicCard: {
    Demo: BasicCardDemo,
    source: basicCardSource,
  },
  CardWithImage: {
    Demo: CardWithImageDemo,
    source: cardWithImageSource,
  },
  GridLayout: {
    Demo: GridLayoutDemo,
    source: gridLayoutSource,
  },
  CardWithHeader: {
    Demo: CardWithHeaderDemo,
    source: cardWithHeaderSource,
  },
  BackgroundVariants: {
    Demo: BackgroundVariantsDemo,
    source: backgroundVariantsSource,
  },
  ButtonVariants: {
    Demo: ButtonVariantsDemo,
    source: buttonVariantsSource,
  },
  Markdown: {
    Demo: MarkdownDemo,
    source: markdownSource,
  },
  Typography: {
    Demo: TypographyDemo,
    source: typographySource,
  },
};
