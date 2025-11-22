import { useState } from 'react';
import { Block } from '../../blocks';
import { Stack, Grid, Switch, Group } from '@mantine/core';

export function CardPage() {
    const [elevated, setElevated] = useState(true);
    const [dimmed, setDimmed] = useState(false);

    return (
        <Stack gap="xl">
            <Block.Heading>Card Block</Block.Heading>
            <Block.Subheading>
                A flexible container for grouping related content.
            </Block.Subheading>

            <Group>
                <Switch
                    label="Elevated"
                    checked={elevated}
                    onChange={(event) => setElevated(event.currentTarget.checked)}
                />
                <Switch
                    label="Dimmed"
                    checked={dimmed}
                    onChange={(event) => setDimmed(event.currentTarget.checked)}
                />
            </Group>

            <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Block.Card elevated={elevated} dimmed={dimmed}>
                        <Block.Card.Header>
                            <Block.Card.Title>Interactive Card</Block.Card.Title>
                        </Block.Card.Header>
                        <Block.Card.Body>
                            <Block.Text>
                                Toggle the switches above to change this card's state.
                            </Block.Text>
                        </Block.Card.Body>
                        <Block.Card.Footer>
                            <Block.Text dim size="sm">Dynamic Props Demo</Block.Text>
                        </Block.Card.Footer>
                    </Block.Card>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Block.Card>
                        <Block.Card.Header>
                            <Block.Card.Title>Static Card</Block.Card.Title>
                        </Block.Card.Header>
                        <Block.Card.Body>
                            <Block.Text>
                                This is the default flat card with a border.
                            </Block.Text>
                        </Block.Card.Body>
                    </Block.Card>
                </Grid.Col>
            </Grid>
        </Stack>
    );
}
