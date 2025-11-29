import MantineCard from "./Card/MantineCard";
import MantineButton from "./Button/MantineButton";
import MantineIcon from "./Icon/MantineIcon";
import MantineText from "./Text/MantineText";
import MantineTitle from "./Title/MantineTitle";
import MantineImage from "./Image/MantineImage";
import MantineLink from "./Link/MantineLink";
import MantineAvatar from "./Avatar/MantineAvatar";
import MantineSection from "./Section/MantineSection";
import { MantineGrid, MantineGridItem } from "./Grid/MantineGrid";
import ButtonGroup from "./Button/ButtonGroup";
import MantineMarkdown from "./Markdown/MantineMarkdown";
import Tabs, { Tab, TabPanel } from "./Tabs/Tabs";
import MantineInput from "./Input/MantineInput";
import MantineBadge from "./Badge/MantineBadge";
import MantineAccordion, {
  AccordionItem,
  AccordionControl,
  AccordionPanel,
} from "./Accordion/MantineAccordion";
import MantineModal from "./Modal/MantineModal";
import MantineAlert from "./Alert/MantineAlert";

const Block = {
  Card: MantineCard,
  Button: MantineButton,
  Icon: MantineIcon,
  Text: MantineText,
  Title: MantineTitle,
  Image: MantineImage,
  Link: MantineLink,
  Avatar: MantineAvatar,
  Section: MantineSection,
  Grid: MantineGrid,
  GridItem: MantineGridItem,
  ButtonGroup,
  Markdown: MantineMarkdown,
  Tabs,
  Tab,
  TabPanel,
  Input: MantineInput,
  Badge: MantineBadge,
  Accordion: MantineAccordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Modal: MantineModal,
  Alert: MantineAlert,
};

export type BlockType = typeof Block;

export default Block;
