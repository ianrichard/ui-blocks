import { forwardRef } from 'react';
import { Avatar as MantineAvatarComponent } from '@mantine/core';

export interface AvatarProps {
    url?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    alt?: string;

    // Size boolean props
    sizeXxs?: boolean;
    sizeXs?: boolean;
    sizeSm?: boolean;
    sizeMd?: boolean;
    sizeLg?: boolean;
    sizeXl?: boolean;
    sizeXxl?: boolean;
}

const MantineAvatar = forwardRef<HTMLDivElement, AvatarProps>(
    ({ url = 'https://placehold.co/100x100', size = 'md', alt = 'Avatar', sizeXxs, sizeXs, sizeSm, sizeMd, sizeLg, sizeXl, sizeXxl }, ref) => {
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
            xxs: 16,
            xs: 24,
            sm: 32,
            md: 40,
            lg: 56,
            xl: 72,
            xxl: 96,
        };

        return (
            <MantineAvatarComponent
                ref={ref}
                src={url}
                alt={alt}
                size={sizeMap[finalSize]}
                radius="xl"
            />
        );
    }
);

MantineAvatar.displayName = 'Block.Avatar';

export default MantineAvatar;
