import { StyledList, StyledItem } from './styles'
import { FooterLogo } from '../FooterLogo'

export function AboutSection() {
  const list: readonly string[] = [
    'Quem somos nós',
    'Política de privacidade',
    'Programa fidelidade',
    'Nossas lojas',
    'Quero ser franqueado',
    'Anuncie aqui',
  ]

  return (
    <StyledList>
      <FooterLogo />
      {list.map((item, index) => <StyledItem key={index}>{item}</StyledItem>)}
    </StyledList>
  )
}