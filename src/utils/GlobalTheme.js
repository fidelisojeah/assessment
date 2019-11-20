
import { createGlobalStyle, css } from 'styled-components';

const GlobalTheme = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
html{
    box-sizing: border-box;
    font-family: 'Open Sans', Arial;
}
body {

    padding: 0;
    margin: 0;
}
html, body{
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 1.2;

    font-style: normal;
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.palette.dark};
    ${({ theme }) => theme.media.tablet(css`
        font-size: ${theme.fontSizes.xsmall};
    `)}
}
*,
::after,
::before {
    background-repeat: no-repeat;
    box-sizing: border-box;
}
a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;

    transition: all 1s cubic-bezier(.25, .8, .25, 1);
    cursor: pointer;

    &:hover,
    &:focus {
        color: #009966;
        outline: 0;
    }
}
p {
    margin: 0 0 15px 0;
}
ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export default GlobalTheme;
