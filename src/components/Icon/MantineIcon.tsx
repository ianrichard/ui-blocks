import { forwardRef } from 'react';
import { ActionIcon } from '@mantine/core';
import * as TablerIcons from '@tabler/icons-react';

export interface IconProps {
    name?: keyof typeof TablerIcons;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    onClick?: () => void;
    href?: string;

    // Size boolean props
    sizeXxs?: boolean;
    sizeXs?: boolean;
    sizeSm?: boolean;
    sizeMd?: boolean;
    sizeLg?: boolean;
    sizeXl?: boolean;
    sizeXxl?: boolean;
}

const MantineIcon = forwardRef<HTMLButtonElement, IconProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ name = 'IconCircle', size = 'md', onClick, href, sizeXxs, sizeXs, sizeSm, sizeMd, sizeLg, sizeXl, sizeXxl }, _ref) => {
        // Determine size from boolean props
        let finalSize = size;
        if (sizeXxs) finalSize = 'xxs';
        if (sizeXs) finalSize = 'xs';
        if (sizeSm) finalSize = 'sm';
        if (sizeMd) finalSize = 'md';
        if (sizeLg) finalSize = 'lg';
        if (sizeXl) finalSize = 'xl';
        if (sizeXxl) finalSize = 'xxl';

        // Map sizes to pixel values
        const sizeMap: Record<string, number> = {
            xxs: 12,
            xs: 16,
            sm: 20,
            md: 24,
            lg: 32,
            xl: 40,
            xxl: 48,
        };

        const IconComponent = (TablerIcons[name] || TablerIcons.IconCircle) as React.ComponentType<{ size: number }>;

        if (onClick || href) {
            return (
                <ActionIcon
                    variant="transparent"
                    onClick={onClick}
                    component={href ? 'a' : undefined}
                    href={href}
                    size={sizeMap[finalSize]}
                >
                    <IconComponent size={sizeMap[finalSize]} />
                </ActionIcon>
            );
        }

        return <IconComponent size={sizeMap[finalSize]} />;
    }
);

MantineIcon.displayName = 'Block.Icon';

export default MantineIcon;
