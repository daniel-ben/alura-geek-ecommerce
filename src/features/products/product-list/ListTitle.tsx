import styled from "styled-components";
import { theme } from "@ui/theme";

export const ListTitle = styled.h2`
  ${theme.fonts.md}
  font-weight: 700;
  color: ${theme.colors.neutral[800]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    ${theme.fonts.lg}
  }
`