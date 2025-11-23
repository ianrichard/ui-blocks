import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Block from '../Block';

export interface CodePreviewProps {
    /** Source code to display */
    src: string;
    /** Language for syntax highlighting (default: 'tsx') */
    language?: string;
    /** Optional title for the preview block */
    title?: string;
}

export default function MantineCodePreview({ src, language = 'tsx', title }: CodePreviewProps) {
    return (
        <Block.Card inset="none" shadow="sm" style={{ overflow: 'hidden' }}>
            {title && (
                <Block inset="sm" borderBottom secondary>
                    <Block.Text size="xs" muted style={{ textTransform: 'uppercase', fontWeight: 500 }}>
                        {title}
                    </Block.Text>
                </Block>
            )}
            <div style={{ fontSize: '12px', margin: 0 }}>
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '1rem',
                        background: '#1e1e1e',
                        borderRadius: 0,
                    }}
                    wrapLongLines
                >
                    {src.trim()}
                </SyntaxHighlighter>
            </div>
        </Block.Card>
    );
}
