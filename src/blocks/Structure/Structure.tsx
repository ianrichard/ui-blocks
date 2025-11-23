import React from 'react';
import { AppShell } from '@mantine/core';

// --- Header ---
export interface HeaderProps {
    children: React.ReactNode;
    height?: number | string;
    p?: string | number;
    bg?: string;
    sticky?: boolean;
}

export const Header = ({ children, height = 60, p = 'md', bg, sticky }: HeaderProps) => {
    return (
        <AppShell.Header
            p={p}
            bg={bg}
            style={{
                height,
                ...(sticky ? { position: 'sticky', top: 0, zIndex: 100 } : {})
            }}
        >
            {children}
        </AppShell.Header>
    );
};

// --- Footer ---
export interface FooterProps {
    children: React.ReactNode;
    height?: number | string;
    p?: string | number;
    bg?: string;
}

export const Footer = ({ children, height = 60, p = 'md', bg }: FooterProps) => {
    return (
        <AppShell.Footer p={p} bg={bg} style={{ height }}>
            {children}
        </AppShell.Footer>
    );
};

// --- Shell ---
export interface ShellProps {
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    navbar?: React.ReactNode;
    aside?: React.ReactNode;
    padding?: string | number;
}

export const Shell = ({ children, header, footer, navbar, aside, padding = 'md' }: ShellProps) => {
    return (
        <AppShell
            header={header ? { height: 60 } : undefined}
            footer={footer ? { height: 60 } : undefined}
            navbar={navbar ? { width: 300, breakpoint: 'sm' } : undefined}
            aside={aside ? { width: 300, breakpoint: 'md' } : undefined}
            padding={padding}
        >
            {header}
            {navbar}
            {aside}
            <AppShell.Main>
                {children}
            </AppShell.Main>
            {footer}
        </AppShell>
    );
};
