import NextImage from 'next/image';
import { useRouter } from 'next/router';
import  { HeaderLogoContainer } from './styles';
import { HeaderProps } from './types';

export default function HeaderLogo({ searchBarDisplay }: HeaderProps) {
  const router = useRouter();
  const handleClick = () => router.push('/');

  return (
    <HeaderLogoContainer 
      onClick={handleClick}
      searchBarDisplay={searchBarDisplay}
    >
      <NextImage 
        src={"/images/Logo.svg"} 
        alt="logo" 
        layout='fill'
      />
    </HeaderLogoContainer>
  )
}