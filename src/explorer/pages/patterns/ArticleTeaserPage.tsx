import { Block } from '../../../blocks';
import { Group } from '@mantine/core';
import { CodePreview } from '../../components/CodePreview';

export function ArticleTeaserPage() {
    const articleTeaserCode = `<Block.Column gap="lg">
    <Block.Card>
        <Block.Grid>
            <Block.GridItem span={4}>
                <Block.Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
                    alt="Tech"
                    height="100%"
                />
            </Block.Column>
            <Block.GridItem span={8}>
                <Block.Column gap="xs">
                    <Group>
                        <Block.Badge color="blue">Technology</Block.Badge>
                        <Block.Text size="sm" dim>5 min read</Block.Text>
                    </Group>
                    <Block.Heading level={3}>The Rise of AI Agents</Block.Heading>
                    <Block.Text dim lineClamp={2}>
                        Artificial Intelligence is evolving from passive tools to active agents capable of complex reasoning and task execution.
                    </Block.Text>
                    <Group mt="sm">
                        <Block.Avatar src="..." size="sm" />
                        <Block.Text size="sm">Sarah Connor</Block.Text>
                    </Group>
                </Block.Column>
            </Block.Column>
        </Block.Grid>
    </Block.Card>
</Block.Column>`;

    return (
        <Block.Column gap="xl">
            <Block.Heading>Article Teaser</Block.Heading>
            <Block.Subheading>
                Standardized content hierarchy for lists and feeds.
            </Block.Subheading>

            <CodePreview title="Article Teaser List" code={articleTeaserCode}>
                <Block.Container size="md">
                    <Block.Column gap="lg">
                        {/* Item 1 */}
                        <Block.Card>
                            <Block.Grid>
                                <Block.GridItem span={4}>
                                    <Block.Image
                                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
                                        alt="Tech"
                                        height="100%"
                                    />
                                </Block.GridItem>
                                <Block.GridItem span={8}>
                                    <Block.Column gap="xs">
                                        <Group>
                                            <Block.Badge color="blue">Technology</Block.Badge>
                                            <Block.Text size="sm" dim>5 min read</Block.Text>
                                        </Group>
                                        <Block.Heading level={3}>The Rise of AI Agents</Block.Heading>
                                        <Block.Text dim lineClamp={2}>
                                            Artificial Intelligence is evolving from passive tools to active agents capable of complex reasoning and task execution.
                                        </Block.Text>
                                        <Group mt="sm">
                                            <Block.Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" size="sm" />
                                            <Block.Text size="sm">Sarah Connor</Block.Text>
                                        </Group>
                                    </Block.Column>
                                </Block.GridItem>
                            </Block.Grid>
                        </Block.Card>

                        {/* Item 2 */}
                        <Block.Card>
                            <Block.Grid>
                                <Block.GridItem span={4}>
                                    <Block.Image
                                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
                                        alt="Design"
                                        height="100%"
                                    />
                                </Block.GridItem>
                                <Block.GridItem span={8}>
                                    <Block.Column gap="xs">
                                        <Group>
                                            <Block.Badge color="pink">Design</Block.Badge>
                                            <Block.Text size="sm" dim>3 min read</Block.Text>
                                        </Group>
                                        <Block.Heading level={3}>Minimalism in 2025</Block.Heading>
                                        <Block.Text dim lineClamp={2}>
                                            How the principles of minimalism are adapting to the age of spatial computing and augmented reality.
                                        </Block.Text>
                                        <Group mt="sm">
                                            <Block.Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png" size="sm" />
                                            <Block.Text size="sm">John Doe</Block.Text>
                                        </Group>
                                    </Block.Column>
                                </Block.GridItem>
                            </Block.Grid>
                        </Block.Card>
                    </Block.Column>
                </Block.Container>
            </CodePreview>
        </Block.Column>
    );
}

