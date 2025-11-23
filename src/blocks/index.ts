import { Card, CardHeader, CardTitle, CardBody, CardFooter } from './Card/Card';
import { Stack, Columns, Column, Container } from './Layout/Layout';
import { Image, Avatar, Video } from './Media/Media';
import { Button, IconButton, Menu } from './Action/Action';
import { Headline, Subheadline, Text, Badge } from './Content/Content';
import { Navbar, Breadcrumbs, Tabs, Link } from './Navigation/Navigation';
import { ShellHeader, ShellFooter, Shell } from './Structure/Structure';

export const Block = {
    // Core Components
    Card,
    Header: CardHeader,
    Title: CardTitle,
    Body: CardBody,
    Footer: CardFooter,

    // Layout
    Stack,
    Columns,
    Column,
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

    // Aliases for backward compatibility (and flattened access)
    Heading: Headline,
    Subheading: Subheadline,

    // Namespaced for backward compatibility (deprecated)
    Layout: {
        Stack,
        Columns,
        Column,
        Container,
    },
    Media: {
        Image,
        Avatar,
        Video,
    },
    Action: {
        Button,
        IconButton,
        Menu,
    },
    Content: {
        Headline,
        Subheadline,
        Text,
        Badge,
    },
    Navigation: {
        Navbar,
        Breadcrumbs,
        Tabs,
        Link,
    },
    Structure: {
        Header: ShellHeader,
        Footer: ShellFooter,
        Shell,
    },
};
