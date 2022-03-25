import { useState } from "react";
import { StyledHeader } from './styles';
import HeaderLogo from './HeaderLogo';
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";

export default function Header() {
  const [searchBarDisplay, setSearchBarDisplay] = useState(false);

  return (
    <StyledHeader>
      <HeaderLogo searchBarDisplay={searchBarDisplay}/>
      <SearchBar 
        searchBarDisplay={searchBarDisplay} 
        setSearchBarDisplay={setSearchBarDisplay}
      />
      <LoginButton searchBarDisplay={searchBarDisplay} />
    </StyledHeader>
  )
}