import styled from 'styled-components'
import { theme } from '@ui/theme'

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  list-style-type: none;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-column: 1 / 1;
    grid-row: 2 / 3;
    align-items: flex-start;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    grid-column: 2 / 3;
    grid-row: 1 / 1;
}
`

export const StyledItem = styled.li`
${theme.fonts.sm}
font-weight: 500;
text-align: start;
`