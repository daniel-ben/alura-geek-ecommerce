import type { NextPage } from 'next'

import styled from 'styled-components'
import { theme } from '@ui/theme'
import Footer from '@ui/Footer'
import Banner from '@features/banner'
import ProductList from '@features/products/product-list'

const Body = styled.div`
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

const Signature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 0;
`

const SignatureText = styled.p`
  ${theme.fonts.sm}
  font-weight: 500;
`

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Body>
        <ProductList title="Star Wars" link="#"/>
        <ProductList title="Consoles" link="#"/>
        <ProductList title="Diversos" link="#"/>
      </Body>

      <Footer />

      <Signature>
        <SignatureText>Desenvolvido por Daniel Ben</SignatureText>
        <SignatureText>2022</SignatureText>
      </Signature>
    </>
  )
}

export default Home
