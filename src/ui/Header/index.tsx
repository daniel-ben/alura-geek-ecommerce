import { useRouter } from 'next/router';
import { 
  StyledHeader, 
  LoginButton, 
} from './styles';
import { HeaderLogo } from './HeaderLogo';
import { SearchBar } from "./SearchBar";

export function Header() {
  const router = useRouter();

  return (
    <StyledHeader>
      <HeaderLogo />
      <SearchBar />
      <LoginButton onClick={() => router.push('/login')} >Login</LoginButton>
    </StyledHeader>
  )
}