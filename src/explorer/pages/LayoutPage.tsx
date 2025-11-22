import { useState } from 'react';
import { Block } from '../../blocks';
import { Switch, Group, Box } from '@mantine/core';

const Placeholder = ({ height = 50, label }: { height?: number; label?: string }) => (
    <Box
        bg="var(--mantine-color-blue-0)"
        style={{
            height,
            border: '1px dashed var(--mantine-color-blue-3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4
        }}
    >
        <Block.Text size="sm" dim>{label || 'Content'}</Block.Text>
    </Box>
);

export function LayoutPage() {
    const [relaxed, setRelaxed] = useState(false);
    const [compact, setCompact] = useState(false);

    return (
        <Block.Stack gap="xl">
            <Block.Heading>Layout Blocks</Block.Heading>
            <Block.Subheading>
                Structural components for managing spacing and "breathing room".
            </Block.Subheading>

            <Group>
                <Switch
                    label="Relaxed (More Space)"
                    checked={relaxed}
                    onChange={(e) => {
                        setRelaxed(e.currentTarget.checked);
                        if (e.currentTarget.checked) setCompact(false);
                    }}
                />
                <Switch
                    label="Compact (Less Space)"
                    checked={compact}
                    onChange={(e) => {
                        setCompact(e.currentTarget.checked);
                        if (e.currentTarget.checked) setRelaxed(false);
                    }}
                />
            </Group>

            <Block.Card>
                <Block.Card.Header>
                    <Block.Card.Title>Stack Example</Block.Card.Title>
                </Block.Card.Header>
                <Block.Card.Body>
                    <Block.Stack relaxed={relaxed} compact={compact}>
                        <Placeholder label="Item 1" />
                        <Placeholder label="Item 2" />
                        <Placeholder label="Item 3" />
                    </Block.Stack>
                </Block.Card.Body>
            </Block.Card>

            <Block.Card>
                <Block.Card.Header>
                    <Block.Card.Title>Columns Example</Block.Card.Title>
                </Block.Card.Header>
                <Block.Card.Body>
                    <Block.Columns>
                        <Block.Column span={4}><Placeholder label="Span 4" /></Block.Column>
                        <Block.Column span={4}><Placeholder label="Span 4" /></Block.Column>
                        <Block.Column span={4}><Placeholder label="Span 4" /></Block.Column>

                        <Block.Column span={8}><Placeholder label="Span 8" /></Block.Column>
                        <Block.Column span={4}><Placeholder label="Span 4" /></Block.Column>
                    </Block.Columns>
                </Block.Card.Body>
            </Block.Card>
        </Block.Stack>
    );
}
