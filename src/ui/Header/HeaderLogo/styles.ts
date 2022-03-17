import styled from "styled-components"
import { theme } from "@ui/theme"

export const HeaderLogoContainer = styled.div`
  min-height: 50px;
  min-width: 176px;  
  position: relative; 

  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
    min-height: 28px;
    min-width: 100px;    
  }
`