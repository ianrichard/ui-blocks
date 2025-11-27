import Markdown from "markdown-to-jsx";
import Block from "..";

export interface MarkdownProps {
  /** Markdown content to render */
  src?: string;
  /** Children can also be passed as markdown string */
  children?: string;
}

export default function MantineMarkdown({ src, children }: MarkdownProps) {
  let content = src || children || "";

  // Pre-process content to handle dot notation components
  const componentMap = [
    "Card",
    "Image",
    "Title",
    "Subtitle",
    "Text",
    "Button",
    "Link",
    "Avatar",
    "Icon",
    "Section",
  ];

  componentMap.forEach((name) => {
    content = content.replaceAll(`<Block.${name}`, `<Block${name}`);
    content = content.replaceAll(`</Block.${name}>`, `</Block${name}>`);
  });

  return (
    <Markdown
      options={{
        overrides: {
          BlockSection: { component: Block.Section },
          BlockCard: { component: Block.Card },
          BlockImage: { component: Block.Image },
          BlockTitle: { component: Block.Title },
          BlockSubtitle: { component: Block.Subtitle },
          BlockText: { component: Block.Text },
          BlockButton: { component: Block.Button },
          BlockLink: { component: Block.Link },
          BlockAvatar: { component: Block.Avatar },
          BlockIcon: { component: Block.Icon },
        },
        forceBlock: true,
      }}
    >
      {content}
    </Markdown>
  );
}
