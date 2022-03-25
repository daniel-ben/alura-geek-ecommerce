import styled from "styled-components";
import { theme } from "@ui/theme";

export const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;

padding: 0 16px;
height: 72px;

@media (min-width: ${theme.breakpoints.sm}) {
  padding: 0 32px;
  flex-wrap: wrap;
  jusutify-content: flex-start;
}

@media (min-width: ${theme.breakpoints.md}) {
  padding: 0 10%;
  height: 115px;
}
`