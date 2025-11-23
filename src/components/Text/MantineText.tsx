import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Text as MantineTextComponent } from '@mantine/core';
import type { MantineSize } from '@mantine/core';

export interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
    children: ReactNode;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    muted?: boolean;
    mb?: string | number;

    // Size boolean props
    xxs?: boolean;
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
}

const MantineText = forwardRef<HTMLParagraphElement, TextProps>(
    ({ children, size = 'md', muted, mb = 'md', xxs, xs, sm, md, lg, xl, xxl, style, className, ...rest }, ref) => {
        // Determine size from boolean props
        let finalSize = size;
        if (xxs) finalSize = 'xxs';
        if (xs) finalSize = 'xs';
        if (sm) finalSize = 'sm';
        if (md) finalSize = 'md';
        if (lg) finalSize = 'lg';
        if (xl) finalSize = 'xl';
        if (xxl) finalSize = 'xxl';

        return (
            <MantineTextComponent
                ref={ref}
                size={finalSize as MantineSize}
                c={muted ? 'dimmed' : undefined}
                mb={mb}
                style={style}
                className={className}
                {...rest}
            >
                {children}
            </MantineTextComponent>
        );
    }
);

MantineText.displayName = 'Block.Text';

export default MantineText;
