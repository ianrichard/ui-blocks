import MantineBlock from "./Block/MantineBlock";
import MantineCard from "./Card/MantineCard";
import MantineButton from "./Button/MantineButton";
import MantineIcon from "./Icon/MantineIcon";
import MantineText from "./Text/MantineText";
import MantineTitle from "./Title/MantineTitle";
import MantineSubtitle from "./Subtitle/MantineSubtitle";
import MantineImage from "./Image/MantineImage";
import MantineLink from "./Link/MantineLink";
import MantineAvatar from "./Avatar/MantineAvatar";

const Block = MantineBlock as typeof MantineBlock & {
  Card: typeof MantineCard;
  Button: typeof MantineButton;
  Icon: typeof MantineIcon;
  Text: typeof MantineText;
  Title: typeof MantineTitle;
  Subtitle: typeof MantineSubtitle;
  Image: typeof MantineImage;
  Link: typeof MantineLink;
  Avatar: typeof MantineAvatar;
};

Block.Card = MantineCard;
Block.Button = MantineButton;
Block.Icon = MantineIcon;
Block.Text = MantineText;
Block.Title = MantineTitle;
Block.Subtitle = MantineSubtitle;
Block.Image = MantineImage;
Block.Link = MantineLink;
Block.Avatar = MantineAvatar;

export default Block;
