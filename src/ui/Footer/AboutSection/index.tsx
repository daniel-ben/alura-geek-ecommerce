import { StyledList, StyledItem } from './style'
import { Logo } from '@ui/components'

export default function AboutSection() {
  const list: string[] = [
    'Quem somos nós',
    'Política de privacidade',
    'Programa fidelidade',
    'Nossas lojas',
    'Quero ser franqueado',
    'Anuncie aqui',
  ]

  return (
    <StyledList>
      <Logo/>
      {list.map((item, index) => <StyledItem key={index}>{item}</StyledItem>)}
    </StyledList>
  )
}