import { 
  StyledForm, 
  StyledFormLabel, 
  StyledInput, 
  StyledInputLabel, 
  StyledTextarea,
} from './style'
import { PrimaryButton } from '@ui/components'



export function ContactForm() {

  return (
    <StyledForm>
      <StyledFormLabel>Fale conosco</StyledFormLabel>
      <StyledInputLabel>
        Nome
        <StyledInput required />
      </StyledInputLabel>
      <StyledTextarea
        required
        placeholder='Escreva sua mensagem'
        rows={3}
      />
      <PrimaryButton>Enviar mensagem</PrimaryButton>
    </StyledForm>
  )
}