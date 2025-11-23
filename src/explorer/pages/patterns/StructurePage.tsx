import { useState } from 'react';
import { Block } from '../../../blocks';
import { Home, Settings, User, Bell, Search } from 'lucide-react';
import { TextInput } from '@mantine/core';

export const StructurePage = () => {
    const [activeTab, setActiveTab] = useState<string | null>('dashboard');

    return (
        <Block.Structure.Shell
            header={
                <Block.Structure.Header sticky>
                    <Block.Navigation.Navbar
                        logo={<Block.Content.Headline level={3}>My App</Block.Content.Headline>}
                        links={[
                            { label: 'Home', to: '/' },
                            { label: 'Products', to: '/products' },
                            { label: 'About', to: '/about' },
                        ]}
                        actions={
                            <Block.Layout.Stack gap="xs" align="center" justify="flex-end" relaxed={false} compact={false}>
                                <TextInput placeholder="Search..." leftSection={<Search size={14} />} />
                                <Block.Action.IconButton icon={Bell} label="Notifications" />
                                <Block.Media.Avatar initials="US" size="sm" />
                            </Block.Layout.Stack>
                        }
                    />
                </Block.Structure.Header>
            }
            footer={
                <Block.Structure.Footer>
                    <Block.Layout.Stack align="center" justify="space-between">
                        <Block.Content.Text size="sm" dim>© 2023 My App. All rights reserved.</Block.Content.Text>
                        <Block.Layout.Stack gap="md">
                            <Block.Navigation.Link href="#">Privacy</Block.Navigation.Link>
                            <Block.Navigation.Link href="#">Terms</Block.Navigation.Link>
                        </Block.Layout.Stack>
                    </Block.Layout.Stack>
                </Block.Structure.Footer>
            }
        >
            <Block.Layout.Container size="xl">
                <Block.Layout.Stack gap="lg">
                    <Block.Navigation.Breadcrumbs mt="md">
                        <Block.Navigation.Link to="/">Home</Block.Navigation.Link>
                        <Block.Navigation.Link to="/dashboard">Dashboard</Block.Navigation.Link>
                        <Block.Content.Text size="sm">Overview</Block.Content.Text>
                    </Block.Navigation.Breadcrumbs>

                    <Block.Content.Headline level={1}>Dashboard</Block.Content.Headline>

                    <Block.Navigation.Tabs value={activeTab || 'dashboard'} onChange={setActiveTab}>
                        <Block.Navigation.Tabs.List>
                            <Block.Navigation.Tabs.Tab value="dashboard" icon={Home}>Overview</Block.Navigation.Tabs.Tab>
                            <Block.Navigation.Tabs.Tab value="users" icon={User}>Users</Block.Navigation.Tabs.Tab>
                            <Block.Navigation.Tabs.Tab value="settings" icon={Settings}>Settings</Block.Navigation.Tabs.Tab>
                        </Block.Navigation.Tabs.List>

                        <Block.Navigation.Tabs.Panel value="dashboard">
                            <Block.Layout.Stack mt="lg">
                                <Block.Content.Text>Welcome to your dashboard overview.</Block.Content.Text>
                                <Block.Layout.Columns gap="md">
                                    <Block.Layout.Column span={4}>
                                        <Block.Card elevated>
                                            <Block.Card.Body>
                                                <Block.Content.Headline level={4}>Total Users</Block.Content.Headline>
                                                <Block.Content.Text size="xl" bold>1,234</Block.Content.Text>
                                            </Block.Card.Body>
                                        </Block.Card>
                                    </Block.Layout.Column>
                                    <Block.Layout.Column span={4}>
                                        <Block.Card elevated>
                                            <Block.Card.Body>
                                                <Block.Content.Headline level={4}>Revenue</Block.Content.Headline>
                                                <Block.Content.Text size="xl" bold>$45,678</Block.Content.Text>
                                            </Block.Card.Body>
                                        </Block.Card>
                                    </Block.Layout.Column>
                                    <Block.Layout.Column span={4}>
                                        <Block.Card elevated>
                                            <Block.Card.Body>
                                                <Block.Content.Headline level={4}>Active Sessions</Block.Content.Headline>
                                                <Block.Content.Text size="xl" bold>89</Block.Content.Text>
                                            </Block.Card.Body>
                                        </Block.Card>
                                    </Block.Layout.Column>
                                </Block.Layout.Columns>
                            </Block.Layout.Stack>
                        </Block.Navigation.Tabs.Panel>

                        <Block.Navigation.Tabs.Panel value="users">
                            <Block.Content.Text mt="lg">User management content goes here.</Block.Content.Text>
                        </Block.Navigation.Tabs.Panel>

                        <Block.Navigation.Tabs.Panel value="settings">
                            <Block.Content.Text mt="lg">Settings configuration goes here.</Block.Content.Text>
                        </Block.Navigation.Tabs.Panel>
                    </Block.Navigation.Tabs>
                </Block.Layout.Stack>
            </Block.Layout.Container>
        </Block.Structure.Shell>
    );
};
