import styled from 'styled-components'
import { theme } from '@ui/theme'

export const StyledFooter = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
gap: 32px;
padding: 16px;
justify-content: space-between;
background-color: ${theme.colors.primary[100]};

& > *:first-child {
  display: none;

  @media (min-width: ${theme.breakpoints.md}) {
    display: block;
  }
}

@media (min-width: ${theme.breakpoints.sm}) {
  flex-direction: row;
  align-items: flex-start;
  padding: 32px;
}

@media (min-width: ${theme.breakpoints.md}) {
  padding: 64px 10%;
  justify-content: space-between;
}
`
