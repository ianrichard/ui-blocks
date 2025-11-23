import { forwardRef } from 'react';
import { Image as MantineImageComponent } from '@mantine/core';

export interface ImageProps {
    url?: string;
    width?: string | number;
    height?: string | number;
    cover?: boolean;
    alt?: string;
}

const MantineImage = forwardRef<HTMLImageElement, ImageProps>(
    ({ url = 'https://placehold.co/600x400', width = '100%', height = 320, cover = true, alt = 'Image' }, ref) => {
        return (
            <MantineImageComponent
                ref={ref}
                src={url}
                alt={alt}
                w={width}
                h={height}
                fit={cover ? 'cover' : 'contain'}
            />
        );
    }
);

MantineImage.displayName = 'Block.Image';

export default MantineImage;
