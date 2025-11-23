import { Block } from '../../../blocks';
import { Edit, Trash, Share, Bell, Settings } from 'lucide-react';
import { CodePreview } from '../../components/CodePreview';

export const RobustPatternPage = () => {
    const robustPatternCode = `<Block.Columns gap="lg">
    <Block.Column span={4}>
        <Block.Card elevated>
            <Block.Header>
                <Block.Title>Card with Actions</Block.Title>
                <Block.Menu>
                    <Block.Menu.Item icon={Edit}>Edit</Block.Menu.Item>
                    <Block.Menu.Item icon={Share}>Share</Block.Menu.Item>
                    <Block.Menu.Item icon={Trash} danger>Delete</Block.Menu.Item>
                </Block.Menu>
            </Block.Header>
            <Block.Body>
                <Block.Text>
                    This card demonstrates the composed header with a menu action.
                    The menu is now more robust and supports icons and danger states.
                </Block.Text>
            </Block.Body>
            <Block.Footer>
                <Block.Button size="xs" ghost>Cancel</Block.Button>
                <Block.Button size="xs" primary>Save</Block.Button>
            </Block.Footer>
        </Block.Card>
    </Block.Column>

    <Block.Column span={4}>
        <Block.Card>
            <Block.Header>
                <Block.Avatar initials="JD" />
                <Block.Badge color="green" variant="light">Active</Block.Badge>
            </Block.Header>
            <Block.Body>
                <Block.Heading level={3}>User Profile</Block.Heading>
                <Block.Text dim size="sm">
                    Software Engineer at Tech Corp
                </Block.Text>
                <Block.Stack gap="xs">
                    <Block.Button block secondary icon={Bell}>Follow</Block.Button>
                    <Block.Button block ghost icon={Settings}>Settings</Block.Button>
                </Block.Stack>
            </Block.Body>
        </Block.Card>
    </Block.Column>

    <Block.Column span={4}>
        <Block.Card dimmed padding="xl">
            <Block.Body>
                <Block.Stack align="center">
                    <Block.Image src="..." alt="Tech" height={140} />
                    <Block.Heading level={4}>Dimmed Card</Block.Heading>
                    <Block.Text size="sm">
                        This card uses the 'dimmed' prop for a subtle background and 'padding="xl"' for more space.
                        The stack is aligned to center.
                    </Block.Text>
                </Block.Stack>
            </Block.Body>
        </Block.Card>
    </Block.Column>
</Block.Columns>`;

    return (
        <Block.Container size="xl">
            <Block.Stack gap="xl" relaxed>
                <Block.Heading level={1}>Robust Components Demo</Block.Heading>
                <Block.Subheading>
                    Showcasing the enhanced robustness, type safety, and flexibility of our UI blocks.
                </Block.Subheading>

                <CodePreview title="Robust Pattern Examples" code={robustPatternCode}>
                    <Block.Columns gap="lg">
                        <Block.Column span={4}>
                            <Block.Card elevated>
                                <Block.Header>
                                    <Block.Title>Card with Actions</Block.Title>
                                    <Block.Menu>
                                        <Block.Menu.Item icon={Edit}>Edit</Block.Menu.Item>
                                        <Block.Menu.Item icon={Share}>Share</Block.Menu.Item>
                                        <Block.Menu.Item icon={Trash} danger>Delete</Block.Menu.Item>
                                    </Block.Menu>
                                </Block.Header>
                                <Block.Body>
                                    <Block.Text>
                                        This card demonstrates the composed header with a menu action.
                                        The menu is now more robust and supports icons and danger states.
                                    </Block.Text>
                                </Block.Body>
                                <Block.Footer>
                                    <Block.Button size="xs" ghost>Cancel</Block.Button>
                                    <Block.Button size="xs" primary>Save</Block.Button>
                                </Block.Footer>
                            </Block.Card>
                        </Block.Column>

                        <Block.Column span={4}>
                            <Block.Card>
                                <Block.Header>
                                    <Block.Avatar initials="JD" />
                                    <Block.Badge color="green" variant="light">Active</Block.Badge>
                                </Block.Header>
                                <Block.Body>
                                    <Block.Heading level={3}>User Profile</Block.Heading>
                                    <Block.Text dim size="sm">
                                        Software Engineer at Tech Corp
                                    </Block.Text>
                                    <Block.Stack gap="xs">
                                        <Block.Button block secondary icon={Bell}>Follow</Block.Button>
                                        <Block.Button block ghost icon={Settings}>Settings</Block.Button>
                                    </Block.Stack>
                                </Block.Body>
                            </Block.Card>
                        </Block.Column>

                        <Block.Column span={4}>
                            <Block.Card dimmed padding="xl">
                                <Block.Body>
                                    <Block.Stack align="center">
                                        <Block.Image
                                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
                                            alt="Tech"
                                            height={140}
                                        />
                                        <Block.Heading level={4}>Dimmed Card</Block.Heading>
                                        <Block.Text size="sm">
                                            This card uses the 'dimmed' prop for a subtle background and 'padding="xl"' for more space.
                                            The stack is aligned to center.
                                        </Block.Text>
                                    </Block.Stack>
                                </Block.Body>
                            </Block.Card>
                        </Block.Column>
                    </Block.Columns>
                </CodePreview>

                <Block.Container size="sm">
                    <Block.Text bold>
                        This is a nested Container with size="sm"
                    </Block.Text>
                </Block.Container>

            </Block.Stack>
        </Block.Container>
    );
};

