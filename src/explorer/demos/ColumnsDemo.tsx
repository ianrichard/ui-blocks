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

export function ColumnsDemo() {
    return (
        <Block.Columns>
            <Block.Column span={4}><Placeholder label="Span 4" /></Block.Column>
            <Block.Column span={4}><Placeholder label="Span 4" /></Block.Column>
            <Block.Column span={4}><Placeholder label="Span 4" /></Block.Column>

            <Block.Column span={8}><Placeholder label="Span 8" /></Block.Column>
            <Block.Column span={4}><Placeholder label="Span 4" /></Block.Column>
        </Block.Columns>
    );
}
