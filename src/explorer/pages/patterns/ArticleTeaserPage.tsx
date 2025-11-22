import { Block } from '../../../blocks';
import { Group } from '@mantine/core';

export function ArticleTeaserPage() {
    return (
        <Block.Layout.Stack gap="xl">
            <Block.Content.Headline>Article Teaser</Block.Content.Headline>
            <Block.Content.Subheadline>
                Standardized content hierarchy for lists and feeds.
            </Block.Content.Subheadline>

            <Block.Layout.Container size="md">
                <Block.Layout.Stack gap="lg">
                    {/* Item 1 */}
                    <Block.Card>
                        <Block.Layout.Columns>
                            <Block.Layout.Column span={4}>
                                <Block.Media.Image
                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
                                    alt="Tech"
                                    height="100%"
                                />
                            </Block.Layout.Column>
                            <Block.Layout.Column span={8}>
                                <Block.Layout.Stack gap="xs">
                                    <Group>
                                        <Block.Content.Badge color="blue">Technology</Block.Content.Badge>
                                        <Block.Content.Text size="sm" dim>5 min read</Block.Content.Text>
                                    </Group>
                                    <Block.Content.Headline level={3}>The Rise of AI Agents</Block.Content.Headline>
                                    <Block.Content.Text dim lineClamp={2}>
                                        Artificial Intelligence is evolving from passive tools to active agents capable of complex reasoning and task execution.
                                    </Block.Content.Text>
                                    <Group mt="sm">
                                        <Block.Media.Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" size="sm" />
                                        <Block.Content.Text size="sm">Sarah Connor</Block.Content.Text>
                                    </Group>
                                </Block.Layout.Stack>
                            </Block.Layout.Column>
                        </Block.Layout.Columns>
                    </Block.Card>

                    {/* Item 2 */}
                    <Block.Card>
                        <Block.Layout.Columns>
                            <Block.Layout.Column span={4}>
                                <Block.Media.Image
                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"
                                    alt="Design"
                                    height="100%"
                                />
                            </Block.Layout.Column>
                            <Block.Layout.Column span={8}>
                                <Block.Layout.Stack gap="xs">
                                    <Group>
                                        <Block.Content.Badge color="pink">Design</Block.Content.Badge>
                                        <Block.Content.Text size="sm" dim>3 min read</Block.Content.Text>
                                    </Group>
                                    <Block.Content.Headline level={3}>Minimalism in 2025</Block.Content.Headline>
                                    <Block.Content.Text dim lineClamp={2}>
                                        How the principles of minimalism are adapting to the age of spatial computing and augmented reality.
                                    </Block.Content.Text>
                                    <Group mt="sm">
                                        <Block.Media.Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png" size="sm" />
                                        <Block.Content.Text size="sm">John Doe</Block.Content.Text>
                                    </Group>
                                </Block.Layout.Stack>
                            </Block.Layout.Column>
                        </Block.Layout.Columns>
                    </Block.Card>
                </Block.Layout.Stack>
            </Block.Layout.Container>
        </Block.Layout.Stack>
    );
}
