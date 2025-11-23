import { Block } from '../../blocks';
import { CodePreview } from '../components/CodePreview';
import { TypographyDemo } from '../demos/TypographyDemo';
import typographyDemoCodeRaw from '../demos/TypographyDemo.tsx?raw';
import { extractDemoCode } from '../utils/extractDemoCode';

export function TypographyPage() {
    const typographyDemoCode = extractDemoCode(typographyDemoCodeRaw);

    return (
        <Block.Column gap="xl">
            <Block.Heading>Typography Block</Block.Heading>
            <Block.Subheading>
                Standardized text elements for consistent hierarchy.
            </Block.Subheading>

            <CodePreview title="Typography Variants" code={typographyDemoCode}>
                <TypographyDemo />
            </CodePreview>
        </Block.Column>
    );
}
