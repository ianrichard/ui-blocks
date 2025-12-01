import Block from "../components";
import MantineAlert from "../components/Alert/MantineAlert";
import { MantineUtilityIcon } from "../components/Icon/MantineIcon";

export default function AlertDemo() {
  return (
    <>
      <Block.Title level={2} outerSpaceBottom="md">
        Alert
      </Block.Title>
      <Block.Section gap="md">
        <MantineAlert
          title="Bummer!"
          color="red"
          icon={<MantineUtilityIcon name="AlertCircle" />}
        >
          Something terrible happened! You made a mistake and there is no going
          back, your data was lost forever!
        </MantineAlert>

        <MantineAlert
          variant="light"
          color="blue"
          title="Alert title"
          icon={<MantineUtilityIcon name="Info" />}
        >
          Alert with light variant
        </MantineAlert>

        <MantineAlert
          variant="outline"
          color="green"
          title="Success"
          icon={<MantineUtilityIcon name="Check" />}
        >
          Everything is fine!
        </MantineAlert>
      </Block.Section>
    </>
  );
}
