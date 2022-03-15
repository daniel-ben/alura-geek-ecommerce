import type { NextPage } from 'next'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton, Title, Subtitle } from '@ui/components'

const Teste = styled.div`
  background-color: lightblue;
`

const Home: NextPage = () => {
  return (
    <Teste>
      <PrimaryButton>Hellow</PrimaryButton>
      <SecondaryButton>Hello 2</SecondaryButton>
      <Title>Dezembro Promocional</Title>
      <Subtitle>Produtos selecionados com até 33% de desconto</Subtitle>
    </Teste>
  )
}

export default Home
