import Block from "../components";
import BackgroundDemo from "./demo/BackgroundDemo";
import ButtonDemo from "./demo/ButtonDemo";
import CardDemo from "./demo/CardDemo";
import GridDemo from "./demo/GridDemo";
import TabsDemo from "./demo/TabsDemo";
import InputDemo from "../demos/InputDemo";
import BadgeDemo from "../demos/BadgeDemo";
import AccordionDemo from "../demos/AccordionDemo";
import ModalDemo from "../demos/ModalDemo";
import AlertDemo from "../demos/AlertDemo";
import MarkdownDemo from "./demo/MarkdownDemo";
import TypographyDemo from "./demo/TypographyDemo";

import styles from "./DemosPage.module.scss";

const Demos = () => {
  const sectionProps = {
    innerSpaceTop: 64,
    innerSpaceBottom: 64,
    borderBottom: true,
    style: {
      // borderWidth: 8,
    },
  };
  return (
    <div className={styles.container}>
      <Block.Section id="card-demo" {...sectionProps} innerSpaceTop={32}>
        <CardDemo />
      </Block.Section>
      <Block.Section id="grid-demo" {...sectionProps}>
        <GridDemo />
      </Block.Section>
      <Block.Section id="background-demo" {...sectionProps}>
        <BackgroundDemo />
      </Block.Section>
      <Block.Section id="button-demo" {...sectionProps}>
        <ButtonDemo />
      </Block.Section>
      <Block.Section id="markdown-demo" {...sectionProps}>
        <MarkdownDemo />
      </Block.Section>
      <Block.Section id="typography-demo" {...sectionProps}>
        <TypographyDemo />
      </Block.Section>
      <Block.Section id="tabs-demo" {...sectionProps}>
        <TabsDemo />
      </Block.Section>
      <Block.Section id="input-demo" {...sectionProps}>
        <InputDemo />
      </Block.Section>
      <Block.Section id="badge-demo" {...sectionProps}>
        <BadgeDemo />
      </Block.Section>
      <Block.Section id="accordion-demo" {...sectionProps}>
        <AccordionDemo />
      </Block.Section>
      <Block.Section id="modal-demo" {...sectionProps}>
        <ModalDemo />
      </Block.Section>
      <Block.Section id="alert-demo" {...sectionProps}>
        <AlertDemo />
      </Block.Section>
    </div>
  );
};

export default Demos;
