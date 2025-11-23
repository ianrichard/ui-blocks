import { Block } from '../../blocks';

export function TypographyDemo() {
    return (
        <Block.Stack>
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
        </Block.Stack>
    );
}
