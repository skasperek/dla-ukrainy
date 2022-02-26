import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

html{scroll-behavior:smooth; height: 100%;}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Montserrat", "Roboto", sans-serif;
}

body{ background: ${p => p.theme.body}; }
a{ text-decoration: none; }

`;

export default GlobalStyle;