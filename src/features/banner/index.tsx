import { PrimaryButton } from '@ui/components'
import { StyledContainer, StyledTitle, StyledSubtitle } from './styles'


export default function Banner() {
  return (
    <StyledContainer>
      <StyledTitle>Dezembro Promocional</StyledTitle>
      <StyledSubtitle>Produtos selecionados com até 33% de desconto</StyledSubtitle>
      <PrimaryButton>Ver Consoles</PrimaryButton>
    </StyledContainer>
  )
}