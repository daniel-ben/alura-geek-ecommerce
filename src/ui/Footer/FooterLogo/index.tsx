import NextImage from 'next/image'
import { useRouter } from 'next/router'
import { FooterLogoContainer } from './styles'

export default function FooterLogo() {
  const router = useRouter()

  return (
    <FooterLogoContainer onClick={() => router.push('/')}>
      <NextImage 
        src={"/images/Logo.svg"} 
        alt="logo" 
        layout='fill'
      />
    </FooterLogoContainer>
  )
}