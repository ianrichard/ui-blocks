import { Block } from '../../../blocks';
import { Group } from '@mantine/core';
import { CodePreview } from '../../components/CodePreview';

export function HeroPage() {
    const heroCode = `<Block.Container size="lg">
    <Block.Stack relaxed>
        <Block.Badge variant="filled" color="blue">New Release</Block.Badge>

        <Block.Heading level={1}>
            Build faster with <span style={{ color: 'var(--mantine-color-blue-6)' }}>Blocks</span>
        </Block.Heading>

        <Block.Text size="lg" dim>
            A fully featured pattern library that helps you build consistent, beautiful user interfaces with ease.
            Stop reinventing the wheel and start shipping.
        </Block.Text>

        <Group>
            <Block.Button primary size="lg">Get Started</Block.Button>
            <Block.Button size="lg">View Source</Block.Button>
        </Group>
    </Block.Stack>
</Block.Container>`;

    return (
        <Block.Stack gap="xl">
            <Block.Heading>Hero Header Pattern</Block.Heading>
            <Block.Subheading>
                A high-impact section for landing pages.
            </Block.Subheading>

            <CodePreview title="Hero Section" code={heroCode}>
                <Block.Container size="lg">
                    <Block.Stack relaxed>
                        <Block.Badge variant="filled" color="blue">New Release</Block.Badge>

                        <Block.Heading level={1}>
                            Build faster with <span style={{ color: 'var(--mantine-color-blue-6)' }}>Blocks</span>
                        </Block.Heading>

                        <Block.Text size="lg" dim>
                            A fully featured pattern library that helps you build consistent, beautiful user interfaces with ease.
                            Stop reinventing the wheel and start shipping.
                        </Block.Text>

                        <Group>
                            <Block.Button primary size="lg">Get Started</Block.Button>
                            <Block.Button size="lg">View Source</Block.Button>
                        </Group>
                    </Block.Stack>
                </Block.Container>
            </CodePreview>
        </Block.Stack>
    );
}

