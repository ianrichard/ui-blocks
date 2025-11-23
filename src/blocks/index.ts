import { Card, CardHeader, CardTitle, CardBody, CardFooter } from './Card/Card';
import { Row, Column, Grid, GridItem, Container } from './Layout/Layout';
import { Image, Avatar, Video } from './Media/Media';
import { Button, IconButton, Menu } from './Action/Action';
import { Headline, Subheadline, Text, Badge } from './Content/Content';
import { Navbar, Breadcrumbs, Tabs, Link } from './Navigation/Navigation';
import { ShellHeader, ShellFooter, Shell } from './Structure/Structure';
import { Block as BaseBlock } from './Primitives/Block';

export const Block = {
    // Base Block (Box equivalent)
    ...BaseBlock,

    // Core Components
    Card,
    Header: CardHeader,
    Title: CardTitle,
    Body: CardBody,
    Footer: CardFooter,

    // Layout (new flex-based components)
    Row,
    Column,
    Grid,
    GridItem,
    Container,

    // Media
    Image,
    Avatar,
    Video,

    // Action
    Button,
    IconButton,
    Menu,

    // Content
    Headline,
    Subheadline,
    Text,
    Badge,

    // Navigation
    Navbar,
    Breadcrumbs,
    Tabs,
    Link,

    // Structure (Shell)
    Shell,
    ShellHeader,
    ShellFooter,

    // Aliases for backward compatibility
    Heading: Headline,
    Subheading: Subheadline,
};
