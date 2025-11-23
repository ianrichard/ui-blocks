import { Block } from '../../blocks';

interface ButtonVariantsDemoProps {
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

export function ButtonVariantsDemo({ block, disabled, loading }: ButtonVariantsDemoProps) {
    return (
        <Block.Column gap="md" align={block ? 'stretch' : 'flex-start'}>
            <Block.Button
                primary
                block={block}
                disabled={disabled}
                loading={loading}
            >
                Primary Action
            </Block.Button>

            <Block.Button
                secondary
                block={block}
                disabled={disabled}
                loading={loading}
            >
                Secondary Action
            </Block.Button>

            <Block.Button
                danger
                block={block}
                disabled={disabled}
                loading={loading}
            >
                Danger Action
            </Block.Button>

            <Block.Button
                ghost
                block={block}
                disabled={disabled}
                loading={loading}
            >
                Ghost Action
            </Block.Button>

            <Block.Button
                block={block}
                disabled={disabled}
                loading={loading}
            >
                Default Action
            </Block.Button>
        </Block.Column>
    );
}
