import { StyledContainer, StyledInput } from "./style"
import { SearchIcon } from "../SearchIcon";

export const SearchBar = function() {
  return (
    <StyledContainer>
      <StyledInput type="text" placeholder="O que deseja encontrar?" />
      <SearchIcon />
    </StyledContainer>
  );
}