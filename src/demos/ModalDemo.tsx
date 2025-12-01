import { useState } from "react";
import Block from "../components";
import MantineModal from "../components/Modal/MantineModal";
import MantineButton from "../components/Button/MantineButton";

export default function ModalDemo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Block.Section>
        <MantineButton onClick={() => setOpened(true)}>
          Open Modal
        </MantineButton>
      </Block.Section>

      <MantineModal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Authentication"
      >
        <Block.Section>
          <Block.Text>
            Modal content goes here. You can put anything you want inside.
          </Block.Text>
        </Block.Section>
      </MantineModal>
    </>
  );
}
