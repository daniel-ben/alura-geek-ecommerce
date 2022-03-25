import NextImage from "next/image";
import { StyledContainer, StyledInput } from "./styles"
import { SearchBarProps } from "./types";

export default function SearchBar({searchBarDisplay, setSearchBarDisplay} : SearchBarProps) {
  const handleClick = () => setSearchBarDisplay((currentState) => !currentState);

  return (
    <StyledContainer searchBarDisplay={searchBarDisplay}>
      <StyledInput 
        type="text" 
        placeholder="O que deseja encontrar?"
        searchBarDisplay={searchBarDisplay}
      />
      <NextImage 
        src={"/images/search.svg"} 
        alt="Search button" 
        width={17} 
        height={17}
        layout="fixed"
        onClick={handleClick}
      />
    </StyledContainer>
  );
}