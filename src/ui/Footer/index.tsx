import { StyledFooter } from './style'
import { Logo } from '@ui/components'
import ContactForm from './ContactForm'
import AboutSection from './AboutSection'

export default function Footer() {

  return (
    <StyledFooter>
      <Logo/>
      <AboutSection />
      <ContactForm />
    </StyledFooter>
  )
}