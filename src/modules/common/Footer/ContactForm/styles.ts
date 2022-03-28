import styled from 'styled-components'
import { theme } from '@ui/theme'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    grid-column: 3 / 4;
    grid-row: 1 / 1;
  }
`

export const StyledFormLabel = styled.p`
  ${theme.fonts.sm}
  font-weight: 700;
`