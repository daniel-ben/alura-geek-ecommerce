import { 
  StyledForm, 
  StyledFormLabel, 
} from './styles'
import { 
  PrimaryButton, 
  StyledInputWithLabel, 
  StyledTextarea 
} from '@ui/components'

export default function ContactForm() {

  return (
    <StyledForm>
      <StyledFormLabel>Fale conosco</StyledFormLabel>

      <StyledInputWithLabel isRequired={true}>Nome</StyledInputWithLabel>
      <StyledTextarea required placeholder='Escreva sua mensagem' />

      <PrimaryButton>Enviar mensagem</PrimaryButton>
    </StyledForm>
  )
}