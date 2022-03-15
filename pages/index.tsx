import type { NextPage } from 'next'
import styled from 'styled-components'
import { theme } from '@ui/theme'
import Banner from '@features/banner'
import ProductList from '@features/products/product-list'

const Teste = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px;

  @media (min-width: ${theme.breakpoints.sm}) {
    gap: 64px;
    padding: 32px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    gap: 32px;
    padding: 64px 10%;
  }
`

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Teste>
        <ProductList title="Star Wars" link="#"/>
        <ProductList title="Consoles" link="#"/>
        <ProductList title="Diversos" link="#"/>
      </Teste>
    </>
  )
}

export default Home
