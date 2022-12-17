import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background: lightgray;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI';
    font-size: 1.8rem;
  }
  html {
    font-size: 62.5%;
  }
  a {
    color: ${({theme}) => theme.colorsTwo.secundary};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
    &:hover {
      opacity: .7;
    }
  }
`;