
import { Block } from '../../blocks';
import { Stack, Paper } from '@mantine/core';

export function TypographyPage() {
    return (
        <Stack gap="xl">
            <Block.Heading>Typography Block</Block.Heading>
            <Block.Subheading>
                Standardized text elements for consistent hierarchy.
            </Block.Subheading>

            <Paper p="xl" withBorder>
                <Stack>
                    <Block.Heading level={1}>Heading 1</Block.Heading>
                    <Block.Heading level={2}>Heading 2</Block.Heading>
                    <Block.Heading level={3}>Heading 3</Block.Heading>

                    <Block.Text>
                        This is standard body text. It has good readability and spacing.
                    </Block.Text>

                    <Block.Text bold>
                        This is bold text for emphasis.
                    </Block.Text>

                    <Block.Text dim>
                        This is dimmed text for secondary information.
                    </Block.Text>
                </Stack>
            </Paper>
        </Stack>
    );
}
