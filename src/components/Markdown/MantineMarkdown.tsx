import Markdown from 'markdown-to-jsx';
import Block from '../Block';

export interface MarkdownProps {
    /** Markdown content to render */
    src?: string;
    /** Children can also be passed as markdown string */
    children?: string;
}

export default function MantineMarkdown({ src, children }: MarkdownProps) {
    let content = src || children || '';

    // Pre-process content to handle dot notation components
    // markdown-to-jsx might not handle <Block.Card> keys correctly in all versions
    // so we replace them with unique tag names
    const componentMap = {
        'Block.Card': 'BlockCard',
        'Block.Image': 'BlockImage',
        'Block.Title': 'BlockTitle',
        'Block.Subtitle': 'BlockSubtitle',
        'Block.Text': 'BlockText',
        'Block.Button': 'BlockButton',
        'Block.Link': 'BlockLink',
        'Block.Avatar': 'BlockAvatar',
        'Block.Icon': 'BlockIcon',
    };

    Object.entries(componentMap).forEach(([dotName, flatName]) => {
        // Replace opening tags
        content = content.replaceAll(`<${dotName}`, `<${flatName}`);
        // Replace closing tags
        content = content.replaceAll(`</${dotName}>`, `</${flatName}>`);
    });

    return (
        <div className="markdown-content">
            <Markdown
                options={{
                    overrides: {
                        // Register flattened component names
                        Block: { component: Block },
                        BlockCard: { component: Block.Card },
                        BlockImage: { component: Block.Image },
                        BlockTitle: { component: Block.Title },
                        BlockSubtitle: { component: Block.Subtitle },
                        BlockText: { component: Block.Text },
                        BlockButton: { component: Block.Button },
                        BlockLink: { component: Block.Link },
                        BlockAvatar: { component: Block.Avatar },
                        BlockIcon: { component: Block.Icon },

                        // Standard markdown element overrides

                        // Standard markdown element overrides
                        p: { component: Block.Text },
                        h1: { component: Block.Title, props: { size: 'xl' } },
                        h2: { component: Block.Title, props: { size: 'lg' } },
                        h3: { component: Block.Title, props: { size: 'md' } },
                        h4: { component: Block.Title, props: { size: 'sm' } },
                        h5: { component: Block.Title, props: { size: 'xs' } },
                        h6: { component: Block.Title, props: { size: 'xs', style: { color: 'var(--mantine-color-dimmed)' } } },
                        a: { component: Block.Link },
                        img: { component: Block.Image }, // Block.Image uses 'url' prop, we might need a wrapper if it passes 'src'

                        // Code block override
                        code: {
                            component: ({ className, children, ...props }: { className?: string; children?: React.ReactNode } & React.ComponentPropsWithoutRef<'code'>) => {
                                const match = /language-(\w+)/.exec(className || '');
                                const isInline = !match && !className; // Rough heuristic, or check if it's inside a pre

                                // markdown-to-jsx passes children as string for code blocks usually
                                if (!isInline && match) {
                                    return (
                                        <Block.CodePreview
                                            src={String(children).replace(/\n$/, '')}
                                            language={match[1]}
                                        />
                                    );
                                }

                                return (
                                    <code className={className} {...props} style={{
                                        background: 'rgba(150,150,150,0.2)',
                                        padding: '2px 4px',
                                        borderRadius: '4px',
                                        fontFamily: 'monospace'
                                    }}>
                                        {children}
                                    </code>
                                );
                            }
                        }
                    },
                }}
            >
                {content}
            </Markdown>
        </div>
    );
}
