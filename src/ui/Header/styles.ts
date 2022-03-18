import styled from "styled-components";
import { theme } from "@ui/theme";
import { SecondaryButton } from "@ui/components"

export const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;

padding: 0 16px;
height: 72px;
width: 100vw;

@media (min-width: ${theme.breakpoints.sm}) {
  padding: 0 32px;
}

@media (min-width: ${theme.breakpoints.md}) {
  width: 100%;
  padding: 0 10%;
  height: 115px;
}
`

export const LogoAndSearchBarContainer = styled.div`
display: flex;
align-items: center;
gap: 32px;

@media (min-width: ${theme.breakpoints.sm}) {
  width: 52%;
}
`

export const LoginButton = styled(SecondaryButton)`
  width: 133px;
  margin: 0 4px;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 166px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 182px;
  }
`
