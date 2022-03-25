import { 
  StyledForm, 
  StyledFormLabel, 
} from './styles'
import { 
  PrimaryButton, 
  InputWithLabel, 
  SimpleTextarea 
} from '@common/components'

export default function ContactForm() {

  return (
    <StyledForm>
      <StyledFormLabel>Fale conosco</StyledFormLabel>

      <InputWithLabel label={'Nome'} isRequired={true} />
      <SimpleTextarea isRequired placeholder='Escreva sua mensagem' />

      <PrimaryButton>Enviar mensagem</PrimaryButton>
    </StyledForm>
  )
}