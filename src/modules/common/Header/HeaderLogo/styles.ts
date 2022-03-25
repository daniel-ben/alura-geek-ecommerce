import styled from "styled-components"
import { theme } from "@ui/theme"
import  { LogoProps } from "./types"

export const StyledHeaderLogo = styled.div<LogoProps>`
  background-image: url(/images/Logo.svg);
  background-size: contain;
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