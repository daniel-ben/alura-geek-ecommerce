import styled from "styled-components";
import { theme } from "@ui/theme";
import { PrimaryButton, StyledInput } from "@ui/components";

const StyledContainer = styled.div`
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

const StyledTitle = styled.h2`
  ${theme.fonts.sm}
  font-weight: 700;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 18px;
    line-height: 21px;
  }
`

const LoginInput = styled(StyledInput)`
  width: 100%;
  max-width: 275px;

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 423px;
  }
`

const EmailInput = styled(LoginInput)``

const PasswordInput = styled(LoginInput)``

const LoginButton = styled(PrimaryButton)`
  padding: 12px 34px;
  @media (min-width: ${theme.breakpoints.md}) {
    width: 100%;
    max-width: 423px;
  }
`


export function LoginPage() {
  return (
    <StyledContainer>
      <StyledTitle>Iniciar sessão</StyledTitle>
      <EmailInput type={"email"} placeholder="Escreva seu email"/>
      <PasswordInput type={"password"} placeholder="Escreva sua senha"/>
      <LoginButton>Entrar</LoginButton>
      
    </StyledContainer>
  )
}