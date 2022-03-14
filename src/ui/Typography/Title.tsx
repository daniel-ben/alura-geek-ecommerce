import styled from "styled-components";
import { theme } from "@ui/theme";

export const Title = styled.h1`
  ${theme.fonts.md}
  color: white;
  
  @media (min-width: ${theme.breakpoints.md}) {
    ${theme.fonts.xl}
  }
`