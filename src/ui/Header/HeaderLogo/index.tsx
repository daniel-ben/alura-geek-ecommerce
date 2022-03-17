import NextImage from 'next/image';
import  { HeaderLogoContainer } from './styles';

export function HeaderLogo() {
  return (
    <HeaderLogoContainer>
      <NextImage 
        src={"/images/Logo.svg"} 
        alt="logo" 
        layout='fill'
      />
    </HeaderLogoContainer>
  )
}