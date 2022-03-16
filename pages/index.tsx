import type { NextPage } from 'next'

import styled from 'styled-components'
import { theme } from '@ui/theme'
import Banner from '@features/banner'
import ProductList from '@features/products/product-list'
import { Logo, PrimaryButton } from '@ui/components'

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

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 16px;
  justify-content: space-between;
  background-color: ${theme.colors.primary[100]};

  & > *:first-child {
    display: none;

    @media (min-width: ${theme.breakpoints.md}) {
      display: block;
    }
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: flex-start;
    padding: 32px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 64px 10%;
    justify-content: space-between;
  }
`

const LogoAndAboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > *:first-child {
    display: block;

    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
    flex-grow: 1;
  }
`

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: ${theme.breakpoints.sm}) {
    gap: 24px;
  }
`

const AboutSectionItem = styled.p`
  ${theme.fonts.sm}
  font-weight: 500;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-grow: 1;
    width: auto;
  }
`

const ContactFormTitle = styled.p`
  ${theme.fonts.sm}
  font-weight: 700;
`

const ContactFormInputLabel = styled.label`
  display: flex;
  flex-direction: column;

  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 1px ${theme.colors.neutral[300]};
  background-color: white;

  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.neutral[400]};
`

const ContactFormInput = styled.input`
  ${theme.fonts.sm}
  margin-top: 4px;
`

const ContactFormTextarea = styled.textarea`
${theme.fonts.sm}
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 0 1px ${theme.colors.neutral[300]};
  resize: none;
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

      <Footer>
        <Logo/>

        <LogoAndAboutSectionWrapper>
          <Logo/>

          <AboutSection>
            <AboutSectionItem>Quem somos nós</AboutSectionItem>
            <AboutSectionItem>Política de privacidade</AboutSectionItem>
            <AboutSectionItem>Programa fidelidade</AboutSectionItem>
            <AboutSectionItem>Nossas lojas</AboutSectionItem>
            <AboutSectionItem>Quero ser franqueado</AboutSectionItem>
            <AboutSectionItem>Anuncie aqui</AboutSectionItem>
          </AboutSection>
        </LogoAndAboutSectionWrapper>

        <ContactForm>
          <ContactFormTitle>Fale conosco</ContactFormTitle>
          <ContactFormInputLabel>
            Nome
            <ContactFormInput required />
          </ContactFormInputLabel>
          <ContactFormTextarea
            required
            placeholder='Escreva sua mensagem'
            rows={3}
          />
          <PrimaryButton>Enviar mensagem</PrimaryButton>
        </ContactForm>
      </Footer>

      <Signature>
        <SignatureText>Desenvolvido por Daniel Ben</SignatureText>
        <SignatureText>2022</SignatureText>
      </Signature>
    </>
  )
}

export default Home
