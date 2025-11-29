import Block from "../components";
import MantineAccordion, {
    AccordionItem,
    AccordionControl,
    AccordionPanel,
} from "../components/Accordion/MantineAccordion";

export default function AccordionDemo() {
    return (
        <Block.Section outerSpace="xl">
            <Block.Title level={2} outerSpaceBottom="md">
                Accordion
            </Block.Title>
            <MantineAccordion defaultValue="customization">
                <AccordionItem value="customization">
                    <AccordionControl>Customization</AccordionControl>
                    <AccordionPanel>
                        Colors, fonts, shadows and many other parts are customizable to fit
                        your design needs
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="flexibility">
                    <AccordionControl>Flexibility</AccordionControl>
                    <AccordionPanel>
                        Configure components appearance and behavior with vast amount of
                        settings or overwrite any part of component styles
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="focus-ring">
                    <AccordionControl>No annoying focus ring</AccordionControl>
                    <AccordionPanel>
                        With new :focus-visible pseudo-class focus ring appears only when
                        user navigates with keyboard
                    </AccordionPanel>
                </AccordionItem>
            </MantineAccordion>
        </Block.Section>
    );
}
