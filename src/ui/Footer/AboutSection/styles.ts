import styled from 'styled-components'
import { theme } from '@ui/theme'

export const StyledList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
list-style-type: none;

& > *:first-child {
  display: block;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
}

@media (min-width: ${theme.breakpoints.sm}) {
  align-items: flex-start;
  gap: 24px;
  flex-grow: 1;
}

@media (min-width: ${theme.breakpoints.md}) {
  max-width: fit-content;
}
`

export const StyledItem = styled.li`
${theme.fonts.sm}
font-weight: 500;
text-align: start;
`