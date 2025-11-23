import { Block } from '../../blocks';
import { Box } from '@mantine/core';

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

interface StackDemoProps {
   ?: boolean;
   ?: boolean;
}

export function StackDemo({, }: StackDemoProps) {
    return (
        <Block.Column={relaxed}={compact}>
            <Placeholder label="Item 1" />
            <Placeholder label="Item 2" />
            <Placeholder label="Item 3" />
        </Block.Column>
    );
}
