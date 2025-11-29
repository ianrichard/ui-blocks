import Block from "../components";
import MantineAlert from "../components/Alert/MantineAlert";
import MantineIcon from "../components/Icon/MantineIcon";

export default function AlertDemo() {
    return (
        <Block.Section outerSpace="xl">
            <Block.Title level={2} outerSpaceBottom="md">
                Alert
            </Block.Title>
            <Block.Section flexDirection="column" gap="md">
                <MantineAlert title="Bummer!" color="red" icon={<MantineIcon name="AlertCircle" />}>
                    Something terrible happened! You made a mistake and there is no going
                    back, your data was lost forever!
                </MantineAlert>

                <MantineAlert
                    variant="light"
                    color="blue"
                    title="Alert title"
                    icon={<MantineIcon name="Info" />}
                >
                    Alert with light variant
                </MantineAlert>

                <MantineAlert
                    variant="outline"
                    color="green"
                    title="Success"
                    icon={<MantineIcon name="Check" />}
                >
                    Everything is fine!
                </MantineAlert>
            </Block.Section>
        </Block.Section>
    );
}
