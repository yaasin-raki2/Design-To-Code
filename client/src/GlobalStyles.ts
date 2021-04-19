import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins";
    margin: 0 240px;
    height: 100%;

    @media screen and (max-width: 1550px) {
      margin: 0px;
      font-size: 20px
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
