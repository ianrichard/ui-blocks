
import { Card as MantineCard, Text, Group, Box, Stack } from '@mantine/core';

// Types
export interface CardProps {
    /** Card content */
    children: React.ReactNode;
    /** Whether the card should have a shadow */
    elevated?: boolean;
    /** Whether the card should have a dimmed background */
    dimmed?: boolean;
    /** Padding size */
    padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Click handler */
    onClick?: () => void;
}

export interface CardHeaderProps {
    children: React.ReactNode;
}

export interface CardTitleProps {
    children: React.ReactNode;
}

export interface CardBodyProps {
    children: React.ReactNode;
}

export interface CardFooterProps {
    children: React.ReactNode;
}

// Components

/**
 * A flexible Card component that supports headers, bodies, and footers.
 */
const CardRoot = ({ children, elevated, dimmed, padding = 'lg', onClick, ...props }: CardProps) => {
    return (
        <MantineCard
            shadow={elevated ? 'sm' : 'none'}
            padding={padding}
            radius="md"
            withBorder={!elevated}
            bg={dimmed ? 'var(--mantine-color-gray-0)' : undefined}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : undefined }}
            {...props}
        >
            <Stack gap="md">
                {children}
            </Stack>
        </MantineCard>
    );
};

const CardHeader = ({ children }: CardHeaderProps) => {
    return (
        <Box>
            <Group justify="space-between" align="center">
                {children}
            </Group>
        </Box>
    );
};

const CardTitle = ({ children }: CardTitleProps) => {
    return (
        <Text fw={600} size="lg">
            {children}
        </Text>
    );
};

const CardBody = ({ children }: CardBodyProps) => {
    return <Box>{children}</Box>;
};

const CardFooter = ({ children }: CardFooterProps) => {
    return (
        <Box pt="sm" style={{ borderTop: '1px solid var(--mantine-color-gray-2)' }}>
            <Group justify="flex-end">
                {children}
            </Group>
        </Box>
    );
};

// Compound Component Composition
export const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Title: CardTitle,
    Body: CardBody,
    Footer: CardFooter,
});
