import { forwardRef } from 'react';
import { Card as MantineCardComponent } from '@mantine/core';
import MantineBlock from '../Block/MantineBlock';
import type { BlockProps } from '../Block/MantineBlock';

export interface CardProps extends BlockProps {
    shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    border?: boolean;
    href?: string;
}

const MantineCard = forwardRef<HTMLDivElement, CardProps>(
    ({ children, shadow = 'sm', border = false, href, ...blockProps }, ref) => {
        const cardContent = (
            <MantineBlock
                ref={ref}
                component={MantineCardComponent}
                shadow={shadow}
                withBorder={border}
                padding={0}
                radius="md"
                style={{ overflow: 'hidden' }}
                {...blockProps}
            >
                {children}
            </MantineBlock>
        );

        if (href) {
            return (
                <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {cardContent}
                </a>
            );
        }

        return cardContent;
    }
);

MantineCard.displayName = 'Block.Card';

export default MantineCard;
