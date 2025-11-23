import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Anchor } from '@mantine/core';

export interface LinkProps {
    children: ReactNode;
    href: string;
    underlined?: boolean;
}

const MantineLink = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ children, href, underlined = true }, ref) => {
        return (
            <Anchor
                ref={ref}
                href={href}
                underline={underlined ? 'always' : 'never'}
            >
                {children}
            </Anchor>
        );
    }
);

MantineLink.displayName = 'Block.Link';

export default MantineLink;
