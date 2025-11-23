import { useState } from 'react';
import { Block } from '../../blocks';
import { Switch, Group } from '@mantine/core';
import { CodePreview } from '../components/CodePreview';
import { StackDemo } from '../demos/StackDemo';
import { ColumnsDemo } from '../demos/ColumnsDemo';
import stackDemoCodeRaw from '../demos/StackDemo.tsx?raw';
import columnsDemoCodeRaw from '../demos/ColumnsDemo.tsx?raw';
import { extractDemoCode } from '../utils/extractDemoCode';

export function LayoutPage() {
    const [relaxed, setRelaxed] = useState(false);
    const [compact, setCompact] = useState(false);

    const stackDemoCode = extractDemoCode(stackDemoCodeRaw);
    const columnsDemoCode = extractDemoCode(columnsDemoCodeRaw);

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

            <CodePreview title="Stack Example" code={stackDemoCode}>
                <StackDemo relaxed={relaxed} compact={compact} />
            </CodePreview>

            <CodePreview title="Columns Example" code={columnsDemoCode}>
                <ColumnsDemo />
            </CodePreview>
        </Block.Stack>
    );
}
