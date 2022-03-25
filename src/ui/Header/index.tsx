import { useState } from "react";
import { useRouter } from 'next/router';
import { 
  StyledHeader, 
  LoginButton, 
} from './styles';
import HeaderLogo from './HeaderLogo';
import SearchBar from "./SearchBar";

export default function Header() {
  const [searchBarDisplay, setSearchBarDisplay] = useState(false);
  const router = useRouter();

  const handleClick = () => router.push('/login');

  return (
    <StyledHeader>
      <HeaderLogo searchBarDisplay={searchBarDisplay}/>
      <SearchBar 
        searchBarDisplay={searchBarDisplay} 
        setSearchBarDisplay={setSearchBarDisplay}
      />
      <LoginButton 
        onClick={handleClick} 
        searchBarDisplay={searchBarDisplay}
      >Login</LoginButton>
    </StyledHeader>
  )
}