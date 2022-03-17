import styled from "styled-components"
import { theme } from "@ui/theme"

export const StyledLink = styled.a`
  width: fit-content;
  display: flex;
  align-items: center;
`

export const StyledText = styled.p`
  ${theme.fonts.xs};
  font-weight: 700;
  color: ${theme.colors.primary[400]};
  padding-right: 12px;

  @media (min-width: ${theme.breakpoints.sm}) {
    ${theme.fonts.sm}
  }
`

export const StyledArrowIcon = styled.span`
  position: relative;
  width: 10px;
  height: 10px;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 16px;
    height: 16px;  
  }
`
