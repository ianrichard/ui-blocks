
import { AppShell, NavLink, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Box, Type, LayoutDashboard, MousePointerClick, Grid3X3, FileText, Megaphone, List, PlaySquare, Newspaper } from 'lucide-react';

export function ExplorerLayout() {
    const [opened, { toggle }] = useDisclosure();
    const location = useLocation();

    const links = [
        { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
        { icon: Box, label: 'Card Block', to: '/blocks/card' },
        { icon: Type, label: 'Typography Block', to: '/blocks/typography' },
        { icon: MousePointerClick, label: 'Button Block', to: '/blocks/button' },
        { icon: Grid3X3, label: 'Layout Block', to: '/blocks/layout' },
        { icon: FileText, label: 'Article Pattern', to: '/patterns/article' },
        { icon: Megaphone, label: 'Hero Pattern', to: '/patterns/hero' },
        { icon: List, label: 'Features Pattern', to: '/patterns/features' },
        { icon: PlaySquare, label: 'Rich Media Card', to: '/patterns/rich-media' },
        { icon: Newspaper, label: 'Article Teaser', to: '/patterns/teaser' },
        { icon: Box, label: 'Robust Pattern', to: '/patterns/robust' },
        { icon: LayoutDashboard, label: 'Structure Pattern', to: '/patterns/structure' },
    ];

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Text size="xl" fw={700}>Blocks Explorer</Text>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                {links.map((link) => (
                    <NavLink
                        key={link.label}
                        component={Link}
                        to={link.to}
                        label={link.label}
                        leftSection={<link.icon size="1rem" strokeWidth={1.5} />}
                        active={location.pathname === link.to}
                        variant="light"
                    />
                ))}
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}
