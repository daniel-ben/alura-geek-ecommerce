import styled from 'styled-components'
import { theme } from '@ui/theme'

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px;

  @media (min-width: ${theme.breakpoints.sm}) {
    gap: 64px;
    padding: 32px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    gap: 32px;
    padding: 64px 10%;
  }
`