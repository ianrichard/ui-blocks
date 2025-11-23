import MantineBlock from './MantineBlock';
import MantineCard from '../Card/MantineCard';
import MantineImage from '../Image/MantineImage';
import MantineTitle from '../Title/MantineTitle';
import MantineSubtitle from '../Subtitle/MantineSubtitle';
import MantineText from '../Text/MantineText';
import MantineButton from '../Button/MantineButton';
import MantineLink from '../Link/MantineLink';
import MantineAvatar from '../Avatar/MantineAvatar';
import MantineIcon from '../Icon/MantineIcon';
import MantineMarkdown from '../Markdown/MantineMarkdown';
import MantineCodePreview from '../CodePreview/MantineCodePreview';

// Create the Block namespace with sub-components
const Block = Object.assign(MantineBlock, {
    Card: MantineCard,
    Image: MantineImage,
    Title: MantineTitle,
    Subtitle: MantineSubtitle,
    Text: MantineText,
    Button: MantineButton,
    Link: MantineLink,
    Avatar: MantineAvatar,
    Icon: MantineIcon,
    Markdown: MantineMarkdown,
    CodePreview: MantineCodePreview,
});

export default Block;

// Export types
export type { BlockProps } from './MantineBlock';
export type { CardProps } from '../Card/MantineCard';
export type { ImageProps } from '../Image/MantineImage';
export type { TitleProps } from '../Title/MantineTitle';
export type { SubtitleProps } from '../Subtitle/MantineSubtitle';
export type { TextProps } from '../Text/MantineText';
export type { ButtonProps } from '../Button/MantineButton';
export type { LinkProps } from '../Link/MantineLink';
export type { AvatarProps } from '../Avatar/MantineAvatar';
export type { IconProps } from '../Icon/MantineIcon';
export type { MarkdownProps } from '../Markdown/MantineMarkdown';
export type { CodePreviewProps } from '../CodePreview/MantineCodePreview';
