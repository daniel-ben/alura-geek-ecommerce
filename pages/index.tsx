import type { NextPage } from 'next'
import styled from 'styled-components'
import Banner from '@features/banner'

const Teste = styled.div`
  background-color: lightblue;
`

const Home: NextPage = () => {
  return (
    <>
      <Banner />
    </>
  )
}

export default Home
