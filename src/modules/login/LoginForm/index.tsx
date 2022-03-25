import {
  StyledForm,
  StyledLabel,
  LoginInput,
  LoginButton,
} from './styles';

export default function LoginForm() {

  return (
    <StyledForm>
      <StyledLabel>Iniciar sessão</StyledLabel>

      <LoginInput type="email" placeholder="Escreva seu email" />
      <LoginInput type="password" placeholder="Escreva sua senha" />

      <LoginButton>Entrar</LoginButton>
    </StyledForm>
  )
}