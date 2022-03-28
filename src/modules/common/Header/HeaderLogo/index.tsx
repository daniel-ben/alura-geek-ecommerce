import { useRouter } from 'next/router';
import NextImage from 'next/image';
import  { StyledHeaderLogo } from './styles';
import { LogoProps } from './types';

export default function HeaderLogo({ searchBarDisplay }: LogoProps) {
  const router = useRouter();
  const handleClick = () => router.push('/');

  return (
    <StyledHeaderLogo 
      onClick={handleClick}
      searchBarDisplay={searchBarDisplay}
    >
      <NextImage src="/images/Logo.svg" alt="logo" layout='fill'/>
    </StyledHeaderLogo>
  )
}