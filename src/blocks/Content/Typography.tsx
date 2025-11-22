
import { Title, Text as MantineText } from '@mantine/core';

export interface HeadingProps {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface TextProps {
    children: React.ReactNode;
    dim?: boolean;
    bold?: boolean;
    size?: 'sm' | 'md' | 'lg';
    mt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Heading = ({ children, level = 1 }: HeadingProps) => {
    return (
        <Title order={level} mb="xs">
            {children}
        </Title>
    );
};

export const Subheading = ({ children }: { children: React.ReactNode }) => {
    return (
        <MantineText size="lg" c="dimmed" mb="md" lh={1.4}>
            {children}
        </MantineText>
    );
};

export const Text = ({ children, dim, bold, size = 'md', mt }: TextProps) => {
    return (
        <MantineText
            c={dim ? 'dimmed' : undefined}
            fw={bold ? 700 : 400}
            size={size}
            mt={mt}
        >
            {children}
        </MantineText>
    );
};
