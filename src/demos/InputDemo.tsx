import Block from "../components";
import MantineInput from "../components/Input/MantineInput";

export default function InputDemo() {
    return (
        <Block.Section outerSpace="xl">
            <Block.Title level={2} outerSpaceBottom="md">
                Input
            </Block.Title>
            <Block.Section flexDirection="column" gap="md" maxWidth="400px">
                <MantineInput
                    label="Email"
                    placeholder="your@email.com"
                    description="We'll never share your email with anyone else."
                />
                <MantineInput
                    label="Password"
                    placeholder="Your password"
                    required
                    error="Password is too short"
                />
                <MantineInput label="Disabled Input" disabled value="Cannot change me" />
            </Block.Section>
        </Block.Section>
    );
}
