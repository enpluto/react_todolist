import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  justify-content: center;

  width: 1028px;
  
  background-color: #FFD370;

  @media (max-width: 376px) {
    max-width: 375px;
    width: 100%;
  }
}
`;

export default GlobalStyle;
