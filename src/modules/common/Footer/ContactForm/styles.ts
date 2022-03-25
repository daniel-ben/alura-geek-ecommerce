import styled from 'styled-components'
import { theme } from '@ui/theme'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-grow: 1;
    width: auto;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 50%;
  }
`

export const StyledFormLabel = styled.p`
  ${theme.fonts.sm}
  font-weight: 700;
`