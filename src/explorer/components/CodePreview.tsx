import { useState } from 'react';
import { Box, Paper, Code, Group, Button, Text, Collapse, ActionIcon, Tooltip, CopyButton } from '@mantine/core';
import { Code as CodeIcon, Check, Copy } from 'lucide-react';

interface CodePreviewProps {
    children: React.ReactNode;
    code: string;
    title?: string;
}

export function CodePreview({ children, code, title }: CodePreviewProps) {
    const [opened, setOpened] = useState(false);

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
                <Box p="md" style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}>
                    <Code block style={{ whiteSpace: 'pre-wrap' }}>{code}</Code>
                </Box>
            </Collapse>
        </Paper>
    );
}
