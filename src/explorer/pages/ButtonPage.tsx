import { useState } from 'react';
import { Block } from '../../blocks';
import { Stack, Group, Switch, Paper } from '@mantine/core';

export function ButtonPage() {
    const [block, setBlock] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <Stack gap="xl">
            <Block.Heading>Button Block</Block.Heading>
            <Block.Subheading>
                Interactive elements for triggering actions.
            </Block.Subheading>

            <Group>
                <Switch
                    label="Full Width (Block)"
                    checked={block}
                    onChange={(e) => setBlock(e.currentTarget.checked)}
                />
                <Switch
                    label="Disabled"
                    checked={disabled}
                    onChange={(e) => setDisabled(e.currentTarget.checked)}
                />
                <Switch
                    label="Loading"
                    checked={loading}
                    onChange={(e) => setLoading(e.currentTarget.checked)}
                />
            </Group>

            <Paper p="xl" withBorder>
                <Stack gap="md" align={block ? 'stretch' : 'flex-start'}>
                    <Block.Button
                        primary
                        block={block}
                        disabled={disabled}
                        loading={loading}
                    >
                        Primary Action
                    </Block.Button>

                    <Block.Button
                        secondary
                        block={block}
                        disabled={disabled}
                        loading={loading}
                    >
                        Secondary Action
                    </Block.Button>

                    <Block.Button
                        danger
                        block={block}
                        disabled={disabled}
                        loading={loading}
                    >
                        Danger Action
                    </Block.Button>

                    <Block.Button
                        ghost
                        block={block}
                        disabled={disabled}
                        loading={loading}
                    >
                        Ghost Action
                    </Block.Button>

                    <Block.Button
                        block={block}
                        disabled={disabled}
                        loading={loading}
                    >
                        Default Action
                    </Block.Button>
                </Stack>
            </Paper>
        </Stack>
    );
}
