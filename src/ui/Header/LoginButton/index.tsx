import styled from "styled-components"
import { theme } from "@ui/theme"
import { SecondaryButton } from "@ui/components"

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