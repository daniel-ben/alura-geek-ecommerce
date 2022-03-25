import styled from "styled-components";
import { theme } from "@ui/theme";
import { PrimaryButton, SimpleInput } from "@ui/components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  
  // 72 = header size
  height: calc(100vh - 72px);
  padding: 0 10%;

  background-color: ${theme.colors.neutral[100]};
`

export const StyledLabel = styled.label`
  ${theme.fonts.sm}
  font-weight: 700;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 18px;
    line-height: 21px;
  }
`

export const LoginInput = styled(SimpleInput)`
  width: 100%;
  max-width: 275px;

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 423px;
    padding: 22px 12px;
  }
`

export const LoginButton = styled(PrimaryButton)`
  padding: 12px 34px;
  
  @media (min-width: ${theme.breakpoints.md}) {
    width: 100%;
    max-width: 423px;
  }
`