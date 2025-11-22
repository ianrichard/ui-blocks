import { Card } from './Card/Card';
import { Stack, Columns, Column } from './Layout/Layout';
// Let's stick to the plan: Media, Action, Content.
// Badge -> Content? Or Primitives? Let's keep Primitives for misc for a second, but actually I should move Badge to Content or a new 'Display' block.
// For now, let's re-export correctly based on the file moves.

import { Image, Avatar, Video } from './Media/Media';
import { Button, IconButton, Menu } from './Action/Action';
import { Headline, Subheadline, Text } from './Content/Content';
import { Badge, Container } from './Primitives/Primitives';

// Re-exporting Badge/Container from Primitives if they are still there?
// Wait, I moved Primitives.tsx to Media.tsx in the `mv` command.
// So Primitives.tsx DOES NOT EXIST anymore.
// I need to check where Badge and Container went.
// In the `mv` command: `mv src/blocks/Primitives/Primitives.tsx src/blocks/Media/Media.tsx`
// So Badge and Container are currently in `Media.tsx` (which I overwrote in the previous step with ONLY Image/Avatar/Video).
// OOPS. I overwrote Badge and Container. I need to restore them.
// I will put Badge in Content and Container in Layout.

export const Block = {
    Card,
    Layout: {
        Stack,
        Columns,
        Column,
        Container,
    },
    Media: {
        Image,
        Avatar,
        Video,
    },
    Action: {
        Button,
        IconButton,
        Menu,
    },
    Content: {
        Headline,
        Subheadline,
        Text,
        Badge,
    },
    // Aliases for backward compatibility during refactor (optional, but good for not breaking everything immediately)
    Stack,
    Columns,
    Column,
    Button,
    Image,
    Avatar,
    Heading: Headline,
    Subheading: Subheadline,
    Text,
    Badge,
    Container,
};
