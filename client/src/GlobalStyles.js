import {createGlobalStyle} from "styled-components";
import {Colors} from "./shared/styles/colors";

const GlobalStyle = createGlobalStyle`

html{scroll-behavior:smooth; height: 100%;}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Montserrat", "Roboto", sans-serif;
}

body{ background: ${Colors.body}; }
a{ text-decoration: none; }

`;

export default GlobalStyle;