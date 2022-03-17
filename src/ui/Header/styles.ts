import styled from "styled-components";
import { theme } from "@ui/theme";
import { SecondaryButton } from "@ui/components"

export const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

margin: 0 16px;
height: 72px;

@media (min-width: ${theme.breakpoints.sm}) {
  margin: 0 32px;
}

@media (min-width: ${theme.breakpoints.md}) {
  width: 80%;
  height: 115px;
  margin: auto;
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
