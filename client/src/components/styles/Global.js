import { createGlobalStyle } from "styled-components";
import { Reset } from "./Reset";
import { Styles } from "./Styles";

export const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Styles}
`;
