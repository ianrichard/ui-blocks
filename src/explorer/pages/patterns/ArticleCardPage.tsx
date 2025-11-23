import { Block } from '../../../blocks';
import { Group } from '@mantine/core';
import { CodePreview } from '../../components/CodePreview';

export function ArticleCardPage() {
    const articleCardCode = `<Block.Card elevated>
    <Block.Header>
        <Block.Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            alt="Article cover"
            height={160}
        />
    </Block.Header>

    <Block.Body>
        <Group justify="space-between" mb="xs">
            <Block.Badge color="blue">Technology</Block.Badge>
            <Block.Text size="sm" dim>Aug 18, 2024</Block.Text>
        </Group>

        <Block.Heading level={3}>The Future of UI Design</Block.Heading>
        <Block.Text dim size="sm">
            Explore the latest trends in user interface design, from glassmorphism to neobrutalism.
        </Block.Text>
    </Block.Body>

    <Block.Footer>
        <Group>
            <Block.Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                alt="Author"
            />
            <Block.Column gap="xs">
                <Block.Text size="sm" bold>Elsa P.</Block.Text>
                <Block.Text size="sm" dim>Editor in Chief</Block.Text>
            </Block.Column>
        </Group>
    </Block.Footer>
</Block.Card>`;

    return (
        <Block.Column gap="xl">
            <Block.Heading>Article Card Pattern</Block.Heading>
            <Block.Subheading>
                A composed pattern for blog posts or news articles.
            </Block.Subheading>

            <CodePreview title="Article Card" code={articleCardCode}>
                <Block.Container size="sm">
                    <Block.Card elevated>
                        <Block.Header>
                            <Block.Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                alt="Article cover"
                                height={160}
                            />
                        </Block.Header>

                        <Block.Body>
                            <Group justify="space-between" mb="xs">
                                <Block.Badge color="blue">Technology</Block.Badge>
                                <Block.Text size="sm" dim>Aug 18, 2024</Block.Text>
                            </Group>

                            <Block.Heading level={3}>The Future of UI Design</Block.Heading>
                            <Block.Text dim size="sm">
                                Explore the latest trends in user interface design, from glassmorphism to neobrutalism.
                            </Block.Text>
                        </Block.Body>

                        <Block.Footer>
                            <Group>
                                <Block.Avatar
                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                    alt="Author"
                                />
                                <Block.Column gap="xs">
                                    <Block.Text size="sm" bold>Elsa P.</Block.Text>
                                    <Block.Text size="sm" dim>Editor in Chief</Block.Text>
                                </Block.Column>
                            </Group>
                        </Block.Footer>
                    </Block.Card>
                </Block.Container>
            </CodePreview>
        </Block.Column>
    );
}

