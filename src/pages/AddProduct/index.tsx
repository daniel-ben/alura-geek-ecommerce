import { PrimaryButton, InputWithLabel, TextareaWithLabel } from '@ui/components'
import { InsertImageContainer, StyledContainer, StyledTitle } from './styles'

export default function AddProduct() {

  return (
    <StyledContainer>
      <StyledTitle>Adicionar novo produto</StyledTitle>

      <InsertImageContainer></InsertImageContainer>

      <InputWithLabel label='Nome do produto' isRequired/>
      <InputWithLabel label='Preço do produto' isRequired/>
      <TextareaWithLabel label='Descrição do produto' isRequired/>

      <PrimaryButton>Adicionar produto</PrimaryButton>
    </StyledContainer>
  )
}