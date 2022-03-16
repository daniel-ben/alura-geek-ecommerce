import { 
  StyledHeader, 
  LogoAndSearchBarContainer, 
  LoginButton, 
} from './style';
import { HeaderLogo } from './HeaderLogo';
import { SearchBar } from "./SearchBar";
import { SearchButton } from "./SearchButton";

export function Header() {

  return (
    <StyledHeader>
      <LogoAndSearchBarContainer>
        <HeaderLogo />
        <SearchBar />
      </LogoAndSearchBarContainer>

      <LoginButton>Login</LoginButton>
      <SearchButton />
    </StyledHeader>
  )
}