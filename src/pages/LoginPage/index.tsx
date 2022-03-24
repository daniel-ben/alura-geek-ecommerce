import {
  StyledContainer,
  StyledTitle,
  EmailInput,
  PasswordInput,
  LoginButton,
} from './styles';


export default function LoginPage() {
  return (
    <StyledContainer>
      <StyledTitle>Iniciar sessão</StyledTitle>

      <EmailInput type="email" placeholder="Escreva seu email"/>
      <PasswordInput type="password" placeholder="Escreva sua senha"/>

      <LoginButton>Entrar</LoginButton>
    </StyledContainer>
  )
}