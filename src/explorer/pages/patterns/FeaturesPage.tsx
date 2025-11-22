import { Block } from '../../../blocks';
import { ThemeIcon } from '@mantine/core';
import { IconGauge, IconCookie, IconUser } from '@tabler/icons-react';

const Feature = ({ icon: Icon, title, description }: any) => (
    <Block.Card>
        <Block.Card.Body>
            <ThemeIcon size={40} radius="md" variant="light" color="blue" mb="md">
                <Icon size={20} stroke={1.5} />
            </ThemeIcon>
            <Block.Text bold size="lg">{title}</Block.Text>
            <Block.Text dim size="sm" mt="sm">{description}</Block.Text>
        </Block.Card.Body>
    </Block.Card>
);

export function FeaturesPage() {
    return (
        <Block.Stack gap="xl">
            <Block.Heading>Features Grid Pattern</Block.Heading>
            <Block.Subheading>
                A grid layout for highlighting key product features.
            </Block.Subheading>

            <Block.Columns>
                <Block.Column span={4}>
                    <Feature
                        icon={IconGauge}
                        title="Performance"
                        description="Optimized for speed and efficiency, ensuring your application runs smoothly under any load."
                    />
                </Block.Column>
                <Block.Column span={4}>
                    <Feature
                        icon={IconCookie}
                        title="Privacy Focused"
                        description="We respect user privacy and ensure data is handled with the utmost care and security."
                    />
                </Block.Column>
                <Block.Column span={4}>
                    <Feature
                        icon={IconUser}
                        title="User Centric"
                        description="Designed with the user in mind, providing an intuitive and enjoyable experience."
                    />
                </Block.Column>
            </Block.Columns>
        </Block.Stack>
    );
}
