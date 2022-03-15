import styled from "styled-components";
import { theme } from "@ui/theme";

export const Subtitle = styled.h3`
  ${theme.fonts.xs}
  font-weight: 700;
  color: white;
  
  @media (min-width: ${theme.breakpoints.md}) {
    ${theme.fonts.md}
  }
`