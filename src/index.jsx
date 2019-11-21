import React from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from 'styled-components';

import { theme, GlobalTheme } from '<utils>';

import Widget from '<containers>/Widget';

const toRender = (
    <ThemeProvider theme={theme}>
        <>
            <GlobalTheme />
            <Widget />
        </>
    </ThemeProvider>
);

const rootElement = document.getElementById('root');

render(toRender, rootElement);
