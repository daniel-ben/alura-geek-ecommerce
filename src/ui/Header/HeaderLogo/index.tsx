import NextImage from 'next/image';
import { useRouter } from 'next/router';
import  { HeaderLogoContainer } from './styles';

export function HeaderLogo() {
  const router = useRouter();

  return (
    <HeaderLogoContainer onClick={() => router.push('/')}>
      <NextImage 
        src={"/images/Logo.svg"} 
        alt="logo" 
        layout='fill'
      />
    </HeaderLogoContainer>
  )
}