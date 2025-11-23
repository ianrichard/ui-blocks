import { Block } from '../../../blocks';
import { Edit, Trash, Share, Bell, Settings } from 'lucide-react';

export const RobustPatternPage = () => {
    return (
        <Block.Layout.Container size="xl">
            <Block.Layout.Stack gap="xl" relaxed>
                <Block.Content.Headline level={1}>Robust Components Demo</Block.Content.Headline>
                <Block.Content.Subheadline>
                    Showcasing the enhanced robustness, type safety, and flexibility of our UI blocks.
                </Block.Content.Subheadline>

                <Block.Layout.Columns gap="lg">
                    <Block.Layout.Column span={4}>
                        <Block.Card elevated>
                            <Block.Card.Header>
                                <Block.Card.Title>Card with Actions</Block.Card.Title>
                                <Block.Action.Menu>
                                    <Block.Action.Menu.Item icon={Edit}>Edit</Block.Action.Menu.Item>
                                    <Block.Action.Menu.Item icon={Share}>Share</Block.Action.Menu.Item>
                                    <Block.Action.Menu.Item icon={Trash} danger>Delete</Block.Action.Menu.Item>
                                </Block.Action.Menu>
                            </Block.Card.Header>
                            <Block.Card.Body>
                                <Block.Content.Text>
                                    This card demonstrates the composed header with a menu action.
                                    The menu is now more robust and supports icons and danger states.
                                </Block.Content.Text>
                            </Block.Card.Body>
                            <Block.Card.Footer>
                                <Block.Action.Button size="xs" ghost>Cancel</Block.Action.Button>
                                <Block.Action.Button size="xs" primary>Save</Block.Action.Button>
                            </Block.Card.Footer>
                        </Block.Card>
                    </Block.Layout.Column>

                    <Block.Layout.Column span={4}>
                        <Block.Card>
                            <Block.Card.Header>
                                <Block.Media.Avatar initials="JD" />
                                <Block.Content.Badge color="green" variant="light">Active</Block.Content.Badge>
                            </Block.Card.Header>
                            <Block.Card.Body>
                                <Block.Content.Headline level={3}>User Profile</Block.Content.Headline>
                                <Block.Content.Text dim size="sm">
                                    Software Engineer at Tech Corp
                                </Block.Content.Text>
                                <Block.Layout.Stack gap="xs">
                                    <Block.Action.Button block secondary icon={Bell}>Follow</Block.Action.Button>
                                    <Block.Action.Button block ghost icon={Settings}>Settings</Block.Action.Button>
                                </Block.Layout.Stack>
                            </Block.Card.Body>
                        </Block.Card>
                    </Block.Layout.Column>

                    <Block.Layout.Column span={4}>
                        <Block.Card dimmed padding="xl">
                            <Block.Card.Body>
                                <Block.Layout.Stack align="center">
                                    <Block.Media.Image
                                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
                                        alt="Tech"
                                        height={140}
                                    />
                                    <Block.Content.Headline level={4}>Dimmed Card</Block.Content.Headline>
                                    <Block.Content.Text size="sm">
                                        This card uses the 'dimmed' prop for a subtle background and 'padding="xl"' for more space.
                                        The stack is aligned to center.
                                    </Block.Content.Text>
                                </Block.Layout.Stack>
                            </Block.Card.Body>
                        </Block.Card>
                    </Block.Layout.Column>
                </Block.Layout.Columns>

                <Block.Layout.Container size="sm">
                    <Block.Content.Text bold>
                        This is a nested Container with size="sm"
                    </Block.Content.Text>
                </Block.Layout.Container>

            </Block.Layout.Stack>
        </Block.Layout.Container>
    );
};
