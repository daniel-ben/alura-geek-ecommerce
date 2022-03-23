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

@media (min-width: ${theme.breakpoints.sm}) {
  padding: 0 32px;
  flex-wrap: wrap;
  jusutify-content: flex-start;
}

@media (min-width: ${theme.breakpoints.md}) {
  padding: 0 10%;
  height: 115px;
}
`

export const LoginButton = styled(SecondaryButton)`
  width: 133px;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 166px;
    margin: 0 0 0 auto;
    order: 3;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 182px;
  }
`
