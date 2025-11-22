
import { Card as MantineCard, Text, Group, Box, Stack } from '@mantine/core';

// Types
export interface CardProps {
    children: React.ReactNode;
    elevated?: boolean;
    dimmed?: boolean;
    padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
const CardRoot = ({ children, elevated, dimmed, ...props }: CardProps) => {
    return (
        <MantineCard
            shadow={elevated ? 'sm' : 'none'}
            padding="lg"
            radius="md"
            withBorder={!elevated}
            bg={dimmed ? 'var(--mantine-color-gray-0)' : undefined}
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
