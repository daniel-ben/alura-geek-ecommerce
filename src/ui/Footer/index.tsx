import { StyledFooter } from './style'
import { ContactForm } from './ContactForm'
import { AboutSection } from './AboutSection'
import { Signature } from './Signature'
import { FooterLogo } from './FooterLogo'

export function Footer() {

  return (
    <>
      <StyledFooter>
        <FooterLogo />
        <AboutSection />
        <ContactForm />
      </StyledFooter>
      <Signature />
    </>
  )
}