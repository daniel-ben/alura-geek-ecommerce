import styled from "styled-components"
import { theme } from "@ui/theme"

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  padding: 32px 0;
`

export const StyledText = styled.p`
  ${theme.fonts.sm}
  font-weight: 500;
`