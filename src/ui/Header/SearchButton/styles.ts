import styled from "styled-components"
import { theme } from "@ui/theme"

export const StyledIconContainer = styled.div`
display: block;

@media (min-width: ${theme.breakpoints.sm}) {
  display: none;
}
`