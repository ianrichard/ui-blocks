import { useState } from 'react';
import { Box, Paper, Group, Button, Text, Collapse, ActionIcon, Tooltip, CopyButton } from '@mantine/core';
import { Code as CodeIcon, Check, Copy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodePreviewProps {
    children: React.ReactNode;
    code: string;
    title?: string;
}

export function CodePreview({ children, code, title }: CodePreviewProps) {
    const [opened, setOpened] = useState(true); // Changed to true for expanded by default

    return (
        <Paper withBorder radius="md" mb="xl">
            {title && (
                <Box p="md" style={{ borderBottom: '1px solid var(--mantine-color-default-border)' }}>
                    <Text fw={500}>{title}</Text>
                </Box>
            )}

            <Box p="xl" style={{ backgroundColor: 'var(--mantine-color-body)' }}>
                {children}
            </Box>

            <Box p="xs" className="code-preview-toolbar" style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}>
                <Group justify="flex-end" gap="xs">
                    <CopyButton value={code} timeout={2000}>
                        {({ copied, copy }) => (
                            <Tooltip label={copied ? 'Copied' : 'Copy code'} withArrow position="right">
                                <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                </ActionIcon>
                            </Tooltip>
                        )}
                    </CopyButton>
                    <Button
                        variant="subtle"
                        color="gray"
                        size="xs"
                        leftSection={<CodeIcon size={14} />}
                        onClick={() => setOpened((o) => !o)}
                    >
                        {opened ? 'Hide Code' : 'View Code'}
                    </Button>
                </Group>
            </Box>

            <Collapse in={opened}>
                <Box style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}>
                    <SyntaxHighlighter
                        language="tsx"
                        style={vscDarkPlus}
                        customStyle={{
                            margin: 0,
                            borderRadius: 0,
                            fontSize: '0.875rem',
                            lineHeight: '1.5',
                        }}
                        showLineNumbers
                    >
                        {code}
                    </SyntaxHighlighter>
                </Box>
            </Collapse>
        </Paper>
    );
}
