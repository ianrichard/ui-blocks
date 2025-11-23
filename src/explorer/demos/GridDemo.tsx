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

export function GridDemo() {
    return (
        <Block.Grid>
            <Block.GridItem span={4}><Placeholder label="Span 4" /></Block.GridItem>
            <Block.GridItem span={4}><Placeholder label="Span 4" /></Block.GridItem>
            <Block.GridItem span={4}><Placeholder label="Span 4" /></Block.GridItem>

            <Block.GridItem span={8}><Placeholder label="Span 8" /></Block.GridItem>
            <Block.GridItem span={4}><Placeholder label="Span 4" /></Block.GridItem>
        </Block.Grid>
    );
}

