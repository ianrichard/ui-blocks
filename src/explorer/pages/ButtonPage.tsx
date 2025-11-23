import { useState } from 'react';
import { Block } from '../../blocks';
import { Switch, Group } from '@mantine/core';
import { CodePreview } from '../components/CodePreview';
import { ButtonVariantsDemo } from '../demos/ButtonVariantsDemo';
import buttonDemoCodeRaw from '../demos/ButtonVariantsDemo.tsx?raw';
import { extractDemoCode } from '../utils/extractDemoCode';

export function ButtonPage() {
    const [block, setBlock] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const buttonDemoCode = extractDemoCode(buttonDemoCodeRaw);

    return (
        <Block.Column gap="xl">
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

            <CodePreview title="Button Variants" code={buttonDemoCode}>
                <ButtonVariantsDemo block={block} disabled={disabled} loading={loading} />
            </CodePreview>
        </Block.Column>
    );
}

