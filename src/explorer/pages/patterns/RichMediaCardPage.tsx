import { Block } from '../../../blocks';
import { Group } from '@mantine/core';
import { Play, Bookmark, Share2 } from 'lucide-react';
import { CodePreview } from '../../components/CodePreview';

export function RichMediaCardPage() {
    const richMediaCardCode = `<Block.Card elevated padding="none">
    <Block.Video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        poster="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
    />

    <Block.Body>
        <Block.Column gap="xs">
            <Group justify="space-between" align="flex-start">
                <Block.Heading level={3}>Big Buck Bunny</Block.Heading>
                <Block.Menu>
                    <Block.Menu.Item icon={Bookmark}>Save to Watch Later</Block.Menu.Item>
                    <Block.Menu.Item icon={Share2}>Share</Block.Menu.Item>
                </Block.Menu>
            </Group>

            <Block.Text dim size="sm">
                Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.
                When one sunny day three rodents rudely harass him, something snaps...
            </Block.Text>

            <Group mt="md">
                <Block.Button primary icon={Play}>Watch Now</Block.Button>
                <Block.Button>Trailer</Block.Button>
            </Group>
        </Block.Column>
    </Block.Body>
</Block.Card>`;

    return (
        <Block.Column gap="xl">
            <Block.Heading>Rich Media Card</Block.Heading>
            <Block.Subheading>
                A holistic pattern combining media, content, and contextual actions.
            </Block.Subheading>

            <CodePreview title="Rich Media Card" code={richMediaCardCode}>
                <Block.Container size="sm">
                    <Block.Card elevated padding="none">
                        <Block.Video
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            poster="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                        />

                        <Block.Body>
                            <Block.Column gap="xs">
                                <Group justify="space-between" align="flex-start">
                                    <Block.Heading level={3}>Big Buck Bunny</Block.Heading>
                                    <Block.Menu>
                                        <Block.Menu.Item icon={Bookmark}>Save to Watch Later</Block.Menu.Item>
                                        <Block.Menu.Item icon={Share2}>Share</Block.Menu.Item>
                                    </Block.Menu>
                                </Group>

                                <Block.Text dim size="sm">
                                    Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.
                                    When one sunny day three rodents rudely harass him, something snaps...
                                </Block.Text>

                                <Group mt="md">
                                    <Block.Button primary icon={Play}>Watch Now</Block.Button>
                                    <Block.Button>Trailer</Block.Button>
                                </Group>
                            </Block.Column>
                        </Block.Body>
                    </Block.Card>
                </Block.Container>
            </CodePreview>
        </Block.Column>
    );
}

