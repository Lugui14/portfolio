import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                scrollBehavior: 'smooth',
                overflowX: 'hidden',
            },
        },
    },
    fonts: {
        body: `'Bebas Neue', cursive`,
    },
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
        '3xl': '112em',
        '4xl': '124em',
        '5xl': '136em',
        '7xl': '160em',
    },
    colors: {
        pallete: {
            topbg: 'rgba(255,235,214,.8)',
            bg: '#ffebd6',
            blue: '#7b73fd',
            red: '#fd6262',
            yellow: '#fcfb7d',
            purple: '#ceafff',
            pink: '#fcace5',
        },
    },
});

export default theme;
