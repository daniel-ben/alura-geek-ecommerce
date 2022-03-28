import styled from "styled-components"
import { theme } from "@ui/theme"

export const FooterLogoContainer = styled.div`
  position: relative; 
  min-height: 50px;
  min-width: 176px;  
  justify-self: center;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    justify-self: start;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    grid-column: 1 / 1;
  }
`