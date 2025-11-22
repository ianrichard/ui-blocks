import { Block } from '../../../blocks';
import { Group } from '@mantine/core';
import { Play, Bookmark, Share2 } from 'lucide-react';

export function RichMediaCardPage() {
    return (
        <Block.Layout.Stack gap="xl">
            <Block.Content.Headline>Rich Media Card</Block.Content.Headline>
            <Block.Content.Subheadline>
                A holistic pattern combining media, content, and contextual actions.
            </Block.Content.Subheadline>

            <Block.Layout.Container size="sm">
                <Block.Card elevated padding="none">
                    <Block.Media.Video
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        poster="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    />

                    <Block.Card.Body>
                        <Block.Layout.Stack gap="xs">
                            <Group justify="space-between" align="flex-start">
                                <Block.Content.Headline level={3}>Big Buck Bunny</Block.Content.Headline>
                                <Block.Action.Menu>
                                    <Block.Action.Menu.Item icon={Bookmark}>Save to Watch Later</Block.Action.Menu.Item>
                                    <Block.Action.Menu.Item icon={Share2}>Share</Block.Action.Menu.Item>
                                </Block.Action.Menu>
                            </Group>

                            <Block.Content.Text dim size="sm">
                                Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.
                                When one sunny day three rodents rudely harass him, something snaps...
                            </Block.Content.Text>

                            <Group mt="md">
                                <Block.Action.Button primary icon={Play}>Watch Now</Block.Action.Button>
                                <Block.Action.Button>Trailer</Block.Action.Button>
                            </Group>
                        </Block.Layout.Stack>
                    </Block.Card.Body>
                </Block.Card>
            </Block.Layout.Container>
        </Block.Layout.Stack>
    );
}
