import { useState } from 'react';
import { Block } from '../../blocks';
import { Group } from '@mantine/core';
import { CodePreview } from '../components/CodePreview';
import { ColumnDemo } from '../demos/ColumnDemo';
import { GridDemo } from '../demos/GridDemo';
import columnDemoCodeRaw from '../demos/ColumnDemo.tsx?raw';
import gridDemoCodeRaw from '../demos/GridDemo.tsx?raw';
import { extractDemoCode } from '../utils/extractDemoCode';

export function LayoutPage() {
    const [gap, setGap] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');

    const columnDemoCode = extractDemoCode(columnDemoCodeRaw);
    const gridDemoCode = extractDemoCode(gridDemoCodeRaw);

    return (
        <Block.Column gap="xl">
            <Block.Heading>Layout Blocks</Block.Heading>
            <Block.Subheading>
                Structural components for managing spacing and "breathing room".
            </Block.Subheading>

            <Group>
                <Block.Button onClick={() => setGap('xs')} primary={gap === 'xs'}>XS</Block.Button>
                <Block.Button onClick={() => setGap('sm')} primary={gap === 'sm'}>SM</Block.Button>
                <Block.Button onClick={() => setGap('md')} primary={gap === 'md'}>MD</Block.Button>
                <Block.Button onClick={() => setGap('lg')} primary={gap === 'lg'}>LG</Block.Button>
                <Block.Button onClick={() => setGap('xl')} primary={gap === 'xl'}>XL</Block.Button>
            </Group>

            <CodePreview title="Column Example" code={columnDemoCode}>
                <ColumnDemo gap={gap} />
            </CodePreview>

            <CodePreview title="Grid Example" code={gridDemoCode}>
                <GridDemo />
            </CodePreview>
        </Block.Column>
    );
}
