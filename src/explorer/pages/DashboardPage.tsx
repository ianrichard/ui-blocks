import { Container, Title, Text, SimpleGrid, Card, ThemeIcon, Group, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Box, Type, MousePointerClick, Grid3X3, FileText, Megaphone, List, PlaySquare, Newspaper, LayoutDashboard } from 'lucide-react';

export function DashboardPage() {
    const blocks = [
        { icon: Box, label: 'Card Block', to: '/blocks/card', description: 'Versatile card components for displaying content.' },
        { icon: Type, label: 'Typography Block', to: '/blocks/typography', description: 'Text styles, headings, and typographic hierarchies.' },
        { icon: MousePointerClick, label: 'Button Block', to: '/blocks/button', description: 'Interactive button styles and variants.' },
        { icon: Grid3X3, label: 'Layout Block', to: '/blocks/layout', description: 'Grid systems and layout structures.' },
    ];

    const patterns = [
        { icon: FileText, label: 'Article Pattern', to: '/patterns/article', description: 'Layouts for long-form text and articles.' },
        { icon: Megaphone, label: 'Hero Pattern', to: '/patterns/hero', description: 'High-impact hero sections for landing pages.' },
        { icon: List, label: 'Features Pattern', to: '/patterns/features', description: 'Grids and lists to showcase product features.' },
        { icon: PlaySquare, label: 'Rich Media Card', to: '/patterns/rich-media', description: 'Cards with video, audio, or complex media.' },
        { icon: Newspaper, label: 'Article Teaser', to: '/patterns/teaser', description: 'Previews for articles and blog posts.' },
        { icon: Box, label: 'Robust Pattern', to: '/patterns/robust', description: 'Complex, multi-component UI patterns.' },
        { icon: LayoutDashboard, label: 'Structure Pattern', to: '/patterns/structure', description: 'Overall page structure and layout patterns.' },
    ];

    return (
        <Container size="xl" py="xl">
            <Stack gap="xl">
                <div>
                    <Title order={1}>Welcome to UI Blocks</Title>
                    <Text c="dimmed" size="lg" mt="md">
                        Explore our collection of modular components and design patterns.
                    </Text>
                </div>

                <div>
                    <Title order={2} mb="lg">Core Blocks</Title>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
                        {blocks.map((item) => (
                            <Card key={item.to} component={Link} to={item.to} withBorder shadow="sm" padding="lg" radius="md" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
                                <Card.Section inheritPadding py="xs">
                                    <Group>
                                        <ThemeIcon size="lg" variant="light" color="blue">
                                            <item.icon size={20} />
                                        </ThemeIcon>
                                        <Text fw={500}>{item.label}</Text>
                                    </Group>
                                </Card.Section>
                                <Text mt="sm" size="sm" c="dimmed">
                                    {item.description}
                                </Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </div>

                <div>
                    <Title order={2} mb="lg">Design Patterns</Title>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
                        {patterns.map((item) => (
                            <Card key={item.to} component={Link} to={item.to} withBorder shadow="sm" padding="lg" radius="md" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
                                <Card.Section inheritPadding py="xs">
                                    <Group>
                                        <ThemeIcon size="lg" variant="light" color="violet">
                                            <item.icon size={20} />
                                        </ThemeIcon>
                                        <Text fw={500}>{item.label}</Text>
                                    </Group>
                                </Card.Section>
                                <Text mt="sm" size="sm" c="dimmed">
                                    {item.description}
                                </Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </div>
            </Stack>
        </Container>
    );
}
