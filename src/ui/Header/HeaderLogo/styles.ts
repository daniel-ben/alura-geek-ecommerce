import styled from "styled-components"
import { theme } from "@ui/theme"

type HeaderProps = {
  searchBarDisplay: boolean
}

export const HeaderLogoContainer = styled.div<HeaderProps>`
  min-height: 50px;
  min-width: 176px;  
  position: relative; 
  display: ${props => props.searchBarDisplay ? "none" : "block"};

  @media (min-width: ${theme.breakpoints.sm}) {
    display: block;
    margin-right: 32px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    min-height: 28px;
    min-width: 100px;
  }
`