import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                scrollBehavior: 'smooth',
                overflowX: 'hidden',
            },
            '::-webkit-scrollbar': {
                width: '4px',
                height: '4px',
            },
            '::-webkit-scrollbar-button': {
                width: '0px',
                height: '0px',
            },
            '::-webkit-scrollbar-track:hover': {
                background: '#ffffff',
            },
            '::-webkit-scrollbar-corner': {
                background: 'transparent',
            },
            '::-webkit-scrollbar-thumb': {
                background: 'black',
            },
        },
    },
    fonts: {
        body: `'Bebas Neue', cursive`,
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
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
            bg2: '#fffff4',
            blue: '#7b73fd',
            lightblue: '#a8a5ff',
            red: '#fd6262',
            yellow: '#fcfb7d',
            purple: '#ceafff',
            pink: '#fcace5',
            white: '#f8fdf8',
            green: '#53cc83',
            lime: '#dbfd00',
        },
    },
});

export default theme;
