import styled from "styled-components";
import { theme } from "@ui/theme";

export const Title = styled.h1`
  ${theme.fonts.md}
  font-weight: 700;
  color: white;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    ${theme.fonts.xl}
  }
`