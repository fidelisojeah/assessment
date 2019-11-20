import { css } from 'styled-components';
import darken from 'polished/lib/color/darken';


const breakpoints = {
    tinyScreen: 375,
    tablet: 600,
    ipad: 1000,
    desktop: 1200,
    giantDesktop: 1440
};

const media = Object.keys(breakpoints).reduce((previousValue, breakpoint) => {
    const result = previousValue;
    result[breakpoint] = (inner) => css`
        @media (max-width: ${breakpoints[breakpoint] / 16}em) {
            ${inner}
        }
    `;
    return result;
}, {});

const palette = {
    white: '#ffffff',
    black: '#0f0f0f',
    primary: '#d8292f',
    offWhite: '#fff9f1',
    grey: '#4a4f55',
    light: '#cfcfcf',
    dark: '#2a2a2a',
    error: '#f93f3f'
};

const fontSizes = {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px'
}

const theme = {
    media,
    palette,
    fontSizes,
    buttonSizes: {
        large: '52px',
        normal: '40px',
        small: '32px'
    },
    shadows: {
        small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        raised: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        evident: 'rgba(37, 42, 49, 0.16) 0px 4px 8px 0px, rgba(37, 42, 49, 0.24) 0px 8px 24px 0px'
    },
    buttonPadding: {
        large: '6px 60px',
        normal: '0 40px',
        small: '0 20px'
    }, colors: {
        ...palette,
        primaryHovered: darken(0.1, palette.primary),
    }
}
export default theme;
