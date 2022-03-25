import styled from 'styled-components'
import { theme } from '@ui/theme'

export const StyledContainer = styled.section`
  width: 100%;
  height: 192px;
  padding: 16px;
  background-image: url('/images/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;

  @media (min-width: ${theme.breakpoints.sm}) {
    height: 352px;
    padding: 32px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 32px 10%;
  }
`

export const StyledTitle = styled.h1`
  ${theme.fonts.md}
  font-weight: 700;
  color: white;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    ${theme.fonts.xl}
  }
`

export const StyledSubtitle = styled.h3`
  ${theme.fonts.xs}
  font-weight: 700;
  color: white;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    ${theme.fonts.md}
  }
`