import styled from "styled-components"
import { theme } from "@ui/theme"

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 32px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 32px 10%;
  }
`

type Header = {
  variant: string
}
export const StyledHeader = styled.div<Header>`
  padding-bottom: 16px;

  display: flex;
  ${props => props.variant === "complete-list" ? 
      `flex-direction: column; 
      align-content: flex-start; 
      gap: 16px;
      
        @media (min-width: ${theme.breakpoints.sm}) {
          flex-direction: row;
          justify-content: space-between;
          align-content: center;
        }
      ` 
    :
    "flex-directin: row; justify-content: space-between; align-content: center;"
  };
`

export const StyledTitle = styled.h2`
  ${theme.fonts.md}
  font-weight: 700;
  color: ${theme.colors.neutral[800]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    ${theme.fonts.lg}
  }
`

export const StyledProductList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: no-wrap;
  gap: 8px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.neutral[100]};
    border-radius: 20px;
  }


  @media (max-width: ${theme.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`