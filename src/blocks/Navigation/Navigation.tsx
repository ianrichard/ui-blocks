import React from 'react';
import {
    Group,
    Tabs as MantineTabs,
    Breadcrumbs as MantineBreadcrumbs,
    Anchor,
    Box,
    Burger,
    Drawer,
    Stack,
    rem
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// --- Link ---
export interface LinkProps {
    children: React.ReactNode;
    href?: string;
    to?: string;
    underline?: 'always' | 'hover' | 'never';
    dimmed?: boolean;
    fw?: number | string;
    c?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Link = ({ children, href, to, underline = 'hover', dimmed, fw, c, size = 'md' }: LinkProps) => {
    if (to) {
        return (
            <Anchor component={RouterLink} to={to} underline={underline} c={dimmed ? 'dimmed' : c} fw={fw} size={size}>
                {children}
            </Anchor>
        );
    }
    return (
        <Anchor href={href} underline={underline} c={dimmed ? 'dimmed' : c} fw={fw} size={size}>
            {children}
        </Anchor>
    );
};

// --- Breadcrumbs ---
export interface BreadcrumbsProps {
    children: React.ReactNode;
    separator?: React.ReactNode;
    mt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    mb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Breadcrumbs = ({ children, separator, mt, mb }: BreadcrumbsProps) => {
    return (
        <MantineBreadcrumbs separator={separator} mt={mt} mb={mb}>
            {children}
        </MantineBreadcrumbs>
    );
};

// --- Tabs ---
export interface TabsProps {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string | null) => void;
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'pills';
    orientation?: 'horizontal' | 'vertical';
}

export interface TabListProps {
    children: React.ReactNode;
}

export interface TabProps {
    value: string;
    children: React.ReactNode;
    icon?: React.ElementType;
}

export interface TabPanelProps {
    value: string;
    children: React.ReactNode;
}

const TabsRoot = ({ defaultValue, value, onChange, children, variant = 'default', orientation = 'horizontal' }: TabsProps) => {
    return (
        <MantineTabs defaultValue={defaultValue} value={value} onChange={onChange} variant={variant} orientation={orientation}>
            {children}
        </MantineTabs>
    );
};

const TabList = ({ children }: TabListProps) => {
    return <MantineTabs.List>{children}</MantineTabs.List>;
};

const Tab = ({ value, children, icon: Icon }: TabProps) => {
    return (
        <MantineTabs.Tab value={value} leftSection={Icon && <Icon style={{ width: rem(16), height: rem(16) }} />}>
            {children}
        </MantineTabs.Tab>
    );
};

const TabPanel = ({ value, children }: TabPanelProps) => {
    return (
        <MantineTabs.Panel value={value} pt="xs">
            {children}
        </MantineTabs.Panel>
    );
};

export const Tabs = Object.assign(TabsRoot, {
    List: TabList,
    Tab: Tab,
    Panel: TabPanel,
});

// --- Navbar ---
export interface NavbarProps {
    logo: React.ReactNode;
    links?: { label: string; to: string }[];
    actions?: React.ReactNode;
}

export const Navbar = ({ logo, links = [], actions }: NavbarProps) => {
    const [opened, { toggle }] = useDisclosure(false);
    const location = useLocation();

    return (
        <Box py="md" style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
            <Group justify="space-between" h="100%">
                <Group>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    {logo}
                </Group>

                <Group gap="lg" visibleFrom="sm">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            fw={500}
                            c={location.pathname === link.to ? 'blue' : undefined}
                            underline="never"
                        >
                            {link.label}
                        </Link>
                    ))}
                </Group>

                <Group visibleFrom="sm">
                    {actions}
                </Group>
            </Group>

            <Drawer opened={opened} onClose={toggle} size="75%">
                <Stack gap="md">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            size="lg"
                            fw={500}
                            c={location.pathname === link.to ? 'blue' : undefined}
                            underline="never"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {actions && <Box mt="xl">{actions}</Box>}
                </Stack>
            </Drawer>
        </Box>
    );
};
