
import {
    Image as MantineImage,
    Avatar as MantineAvatar,
    AspectRatio
} from '@mantine/core';

// --- Image ---
export interface ImageProps {
    src: string;
    alt: string;
    height?: number | string;
    radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fit?: 'contain' | 'cover';
}

export const Image = ({ src, alt, height, radius = 'md', fit = 'cover' }: ImageProps) => {
    return (
        <MantineImage
            src={src}
            alt={alt}
            h={height}
            radius={radius}
            fit={fit}
        />
    );
};

// --- Avatar ---
export interface AvatarProps {
    src?: string;
    alt?: string;
    initials?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Avatar = ({ src, alt, initials, size = 'md', radius = 'full' }: AvatarProps) => {
    return (
        <MantineAvatar src={src} alt={alt} size={size} radius={radius}>
            {initials}
        </MantineAvatar>
    );
};

// --- Video ---
export interface VideoProps {
    src: string;
    poster?: string;
    ratio?: number;
    autoPlay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
}

export const Video = ({ src, poster, ratio = 16 / 9, autoPlay, controls = true, loop, muted }: VideoProps) => {
    return (
        <AspectRatio ratio={ratio}>
            <video
                src={src}
                poster={poster}
                autoPlay={autoPlay}
                controls={controls}
                loop={loop}
                muted={muted}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--mantine-radius-md)' }}
            />
        </AspectRatio>
    );
};
