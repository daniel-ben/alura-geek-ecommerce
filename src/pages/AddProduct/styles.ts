import styled from "styled-components";
import { theme } from "@ui/theme";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`

export const StyledTitle = styled.h1`
  ${theme.fonts.md}
  font-weight: 700;
  color: ${theme.colors.neutral[800]};
`

export const InsertImageContainer = styled.div`
  height: 134px;
  width: 100%;
  background-color: white;
  border: 1px dashed ${theme.colors.neutral[300]};

  @media (min-width: ${theme.breakpoints.sm}) {
    height: 152px;
    width: 50%;
  }
`
