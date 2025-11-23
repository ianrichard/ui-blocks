import { useState } from 'react';
import { Block } from '../../../blocks';
import { Home, Settings, User, Bell, Search } from 'lucide-react';
import { TextInput } from '@mantine/core';

export const StructurePage = () => {
    const [activeTab, setActiveTab] = useState<string | null>('dashboard');

    // Note: This page demonstrates a full page structure pattern with Shell, Header, Footer, and Navigation
    // View the page source to see the complete implementation
    return (
        <Block.Shell
            header={
                <Block.Header>
                    <Block.Navbar
                        logo={<Block.Heading level={3}>My App</Block.Heading>}
                        links={[
                            { label: 'Home', to: '/' },
                            { label: 'Products', to: '/products' },
                            { label: 'About', to: '/about' },
                        ]}
                        actions={
                            <Block.Column gap="xs" align="center" justify="flex-end">
                                <TextInput placeholder="Search..." leftSection={<Search size={14} />} />
                                <Block.IconButton icon={Bell} label="Notifications" />
                                <Block.Avatar initials="US" size="sm" />
                            </Block.Column>
                        }
                    />
                </Block.Header>
            }
            footer={
                <Block.Footer>
                    <Block.Column align="center" justify="space-between">
                        <Block.Text size="sm" dim>© 2023 My App. All rights reserved.</Block.Text>
                        <Block.Column gap="md">
                            <Block.Link href="#">Privacy</Block.Link>
                            <Block.Link href="#">Terms</Block.Link>
                        </Block.Column>
                    </Block.Column>
                </Block.Footer>
            }
        >
            <Block.Container size="xl">
                <Block.Column gap="lg">
                    <Block.Breadcrumbs mt="md">
                        <Block.Link to="/">Home</Block.Link>
                        <Block.Link to="/dashboard">Dashboard</Block.Link>
                        <Block.Text size="sm">Overview</Block.Text>
                    </Block.Breadcrumbs>

                    <Block.Heading level={1}>Dashboard</Block.Heading>

                    <Block.Tabs value={activeTab || 'dashboard'} onChange={setActiveTab}>
                        <Block.Tabs.List>
                            <Block.Tabs.Tab value="dashboard" icon={Home}>Overview</Block.Tabs.Tab>
                            <Block.Tabs.Tab value="users" icon={User}>Users</Block.Tabs.Tab>
                            <Block.Tabs.Tab value="settings" icon={Settings}>Settings</Block.Tabs.Tab>
                        </Block.Tabs.List>

                        <Block.Tabs.Panel value="dashboard">
                            <Block.Column mt="lg">
                                <Block.Text>Welcome to your dashboard overview.</Block.Text>
                                <Block.Grid gap="md">
                                    <Block.GridItem span={4}>
                                        <Block.Card elevated>
                                            <Block.Body>
                                                <Block.Heading level={4}>Total Users</Block.Heading>
                                                <Block.Text size="xl" bold>1,234</Block.Text>
                                            </Block.Body>
                                        </Block.Card>
                                    </Block.GridItem>
                                    <Block.GridItem span={4}>
                                        <Block.Card elevated>
                                            <Block.Body>
                                                <Block.Heading level={4}>Revenue</Block.Heading>
                                                <Block.Text size="xl" bold>$45,678</Block.Text>
                                            </Block.Body>
                                        </Block.Card>
                                    </Block.GridItem>
                                    <Block.GridItem span={4}>
                                        <Block.Card elevated>
                                            <Block.Body>
                                                <Block.Heading level={4}>Active Sessions</Block.Heading>
                                                <Block.Text size="xl" bold>89</Block.Text>
                                            </Block.Body>
                                        </Block.Card>
                                    </Block.GridItem>
                                </Block.Grid>
                            </Block.Column>
                        </Block.Tabs.Panel>

                        <Block.Tabs.Panel value="users">
                            <Block.Text mt="lg">User management content goes here.</Block.Text>
                        </Block.Tabs.Panel>

                        <Block.Tabs.Panel value="settings">
                            <Block.Text mt="lg">Settings configuration goes here.</Block.Text>
                        </Block.Tabs.Panel>
                    </Block.Tabs>
                </Block.Column>
            </Block.Container>
        </Block.Shell>
    );
};
