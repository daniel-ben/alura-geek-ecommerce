import { useRouter } from 'next/router';
import { 
  StyledHeader, 
  LogoAndSearchBarContainer, 
  LoginButton, 
} from './styles';
import { HeaderLogo } from './HeaderLogo';
import { SearchBar } from "./SearchBar";
import { SearchButton } from "./SearchButton";

export function Header() {
  const router = useRouter();

  return (
    <StyledHeader>
      <LogoAndSearchBarContainer>
        <HeaderLogo />
        <SearchBar />
      </LogoAndSearchBarContainer>

      <LoginButton onClick={() => router.push('/login')} >Login</LoginButton>
      <SearchButton />
    </StyledHeader>
  )
}