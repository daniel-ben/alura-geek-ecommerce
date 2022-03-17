import NextImage from 'next/image'
import { FooterLogoContainer } from './styles'

export function FooterLogo() {

  return (
    <FooterLogoContainer>
      <NextImage 
        src={"/images/Logo.svg"} 
        alt="logo" 
        layout='fill'
      />
    </FooterLogoContainer>
  )
}