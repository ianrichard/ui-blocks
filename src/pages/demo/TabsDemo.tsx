import Block from "../../components";

const TabsDemo = () => (
  <Block.Section>
    <Block.Tabs>
      <Block.Tab icon="IconPhoto">Gallery</Block.Tab>
      <Block.Tab icon="IconMessageCircle">Messages</Block.Tab>
      <Block.Tab icon="IconSettings">Settings</Block.Tab>
      <Block.TabPanel>
        <Block.Section outerSpaceTop outerSpaceBottom>
          <Block.Title>Tab 1</Block.Title>
          <Block.Text>Content</Block.Text>
        </Block.Section>
      </Block.TabPanel>
      <Block.TabPanel>
        <Block.Section outerSpaceTop outerSpaceBottom>
          <Block.Title>Tab 2</Block.Title>
          <Block.Text>Content</Block.Text>
        </Block.Section>
      </Block.TabPanel>
      <Block.TabPanel>
        <Block.Section outerSpaceTop outerSpaceBottom>
          <Block.Title>Tab 3</Block.Title>
          <Block.Text>Content</Block.Text>
        </Block.Section>
      </Block.TabPanel>
    </Block.Tabs>
  </Block.Section>
);

export default TabsDemo;
