import styled from 'styled-components'
import { PrimaryButton } from '@ui/components'
import { Title, Subtitle } from './Typography'
import { theme } from '@ui/theme'

const BannerContainer = styled.section`
  width: 100vw;
  height: 192px;
  padding: 16px;
  background-image: url('/images/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;

  @media (min-width: ${theme.breakpoints.sm}) {
    height: 352px;
    padding: 32px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 32px 10%;
  }
`

export default function Banner() {

  return (
    <BannerContainer>
      <Title>Dezembro Promocional</Title>
      <Subtitle>Produtos selecionados com até 33% de desconto</Subtitle>
      <PrimaryButton>Ver Consoles</PrimaryButton>
    </BannerContainer>
  )
}