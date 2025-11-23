import Block from '../components/Block';
import {
    basicCard,
    cardWithImage,
    horizontalCard,
    gridLayout,
    cardWithHeader,
    backgroundVariants,
    buttonVariants,
    markdownExample
} from '../snippets';

export function MantineBlockDemo() {
    return (
        <Block column gap="xl">
            {/* Basic Card Example */}
            <Block.Markdown src={basicCard} />
            <Block.CodePreview src={basicCard} title="Basic Card" />

            {/* Card with Image */}
            <Block.Markdown src={cardWithImage} />
            <Block.CodePreview src={cardWithImage} title="Card with Image" />

            {/* Horizontal Card Layout */}
            <Block.Markdown src={horizontalCard} />
            <Block.CodePreview src={horizontalCard} title="Horizontal Card" />

            {/* Grid Layout */}
            <Block.Markdown src={gridLayout} />
            <Block.CodePreview src={gridLayout} title="Grid Layout" />

            {/* Card with Header and Actions */}
            <Block.Markdown src={cardWithHeader} />
            <Block.CodePreview src={cardWithHeader} title="Card with Header" />

            {/* Background Variants */}
            <Block.Markdown src={backgroundVariants} />
            <Block.CodePreview src={backgroundVariants} title="Background Variants" />

            {/* Button Variants */}
            <Block.Markdown src={buttonVariants} />
            <Block.CodePreview src={buttonVariants} title="Button Variants" />
        </Block>
    );
}
