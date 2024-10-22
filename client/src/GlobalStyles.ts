import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins";
    margin: 0 auto;
    height: 100%;
    max-width: 1440px;
    background-color: ${({ theme }) => theme.background};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;
