import NextImage from 'next/image';
import { useRouter } from 'next/router';
import  { HeaderLogoContainer } from './styles';


export default function HeaderLogo(props: { searchBarDisplay: boolean }) {
  const router = useRouter();
  const handleClick = () => router.push('/');

  return (
    <HeaderLogoContainer 
      onClick={handleClick}
      searchBarDisplay={props.searchBarDisplay}
    >
      <NextImage 
        src={"/images/Logo.svg"} 
        alt="logo" 
        layout='fill'
      />
    </HeaderLogoContainer>
  )
}