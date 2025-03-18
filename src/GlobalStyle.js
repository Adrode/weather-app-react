import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.color.fontColor};
    background-color: ${({ theme }) => theme.color.lightYellow};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;