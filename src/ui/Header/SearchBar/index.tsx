import NextImage from "next/image";
import { Dispatch, SetStateAction } from "react";
import { StyledContainer, StyledInput } from "./styles"

type SearchBarProps = {
  searchBarDisplay: boolean,
  setSearchBarDisplay: Dispatch<SetStateAction<boolean>>
}

export default function SearchBar(props : SearchBarProps) {
  const handleClick = () => props.setSearchBarDisplay((currentState) => !currentState);

  return (
    <StyledContainer searchBarDisplay={props.searchBarDisplay}>
      <StyledInput 
        type="text" 
        placeholder="O que deseja encontrar?"
        searchBarDisplay={props.searchBarDisplay}
      />
      <NextImage 
        src={"/images/search.svg"} 
        alt="Search" 
        width={17} 
        height={17}
        layout="fixed"
        onClick={handleClick}
      />
    </StyledContainer>
  );
}