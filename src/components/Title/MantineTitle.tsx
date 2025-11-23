import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Title as MantineTitleComponent } from '@mantine/core';
import type { MantineSize } from '@mantine/core';

export interface TitleProps extends React.ComponentPropsWithoutRef<'h1'> {
    children: ReactNode;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    mb?: string | number;
    mt?: string | number;

    // Size boolean props
    xxs?: boolean;
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
}

const MantineTitle = forwardRef<HTMLHeadingElement, TitleProps>(
    ({ children, size = 'lg', mb = 'sm', mt, xxs, xs, sm, md, lg, xl, xxl, style, className, ...rest }, ref) => {
        // Determine size from boolean props
        let finalSize = size;
        if (xxs) finalSize = 'xxs';
        if (xs) finalSize = 'xs';
        if (sm) finalSize = 'sm';
        if (md) finalSize = 'md';
        if (lg) finalSize = 'lg';
        if (xl) finalSize = 'xl';
        if (xxl) finalSize = 'xxl';

        // Map our sizes to Mantine heading orders
        const sizeToOrder: Record<string, 1 | 2 | 3 | 4 | 5 | 6> = {
            xxs: 6,
            xs: 5,
            sm: 4,
            md: 3,
            lg: 2,
            xl: 1,
            xxl: 1,
        };

        return (
            <MantineTitleComponent
                ref={ref}
                order={sizeToOrder[finalSize]}
                size={finalSize as MantineSize}
                mb={mb}
                mt={mt}
                style={style}
                className={className}
                {...rest}
            >
                {children}
            </MantineTitleComponent>
        );
    }
);

MantineTitle.displayName = 'Block.Title';

export default MantineTitle;
