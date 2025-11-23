import { Card } from './Card/Card';
import { Stack, Columns, Column, Container } from './Layout/Layout';
import { Image, Avatar, Video } from './Media/Media';
import { Button, IconButton, Menu } from './Action/Action';
import { Headline, Subheadline, Text, Badge } from './Content/Content';
import { Navbar, Breadcrumbs, Tabs, Link } from './Navigation/Navigation';
import { Header, Footer, Shell } from './Structure/Structure';

export const Block = {
    Card,
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
        Header,
        Footer,
        Shell,
    },
    // Aliases for backward compatibility
    Stack,
    Columns,
    Column,
    Button,
    Image,
    Avatar,
    Heading: Headline,
    Subheading: Subheadline,
    Text,
    Badge,
    Container,
};
