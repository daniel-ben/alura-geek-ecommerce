import styled from 'styled-components'
import { theme } from '@ui/theme'

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: auto;
  row-gap: 32px;

  padding: 16px;
  background-color: ${theme.colors.primary[100]};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    row-gap: 16px;
    
    padding: 32px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 64px 10%;
    grid-template-columns: 25% 25% 50%;
  }
`
