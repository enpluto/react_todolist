import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  max-width: 1028px;
  width: 100%;
  margin: auto;
  
  background-color: #FFD370;
  font-family: "Noto Sans TC";

  @media (max-width: 376px) {
    max-width: 375px;
  }
}
`;

export default GlobalStyle;
