import type { NextPage } from 'next'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton, Title } from '@ui/index'

const Teste = styled.div`
  background-color: lightblue;
`

const Home: NextPage = () => {
  return (
    <Teste>
      <PrimaryButton>Hellow</PrimaryButton>
      <SecondaryButton>Hello 2</SecondaryButton>
      <Title>Dezembro Promocional</Title>
    </Teste>
  )
}

export default Home
