import styled from "styled-components"
import { theme } from "@ui/theme"
import { SearchIcon } from "../SearchIcon"

const SearchButtonContainer = styled.div`
display: block;

@media (min-width: ${theme.breakpoints.sm}) {
  display: none;
}
`

export const SearchButton = function() {
  return(
    <SearchButtonContainer>
      <SearchIcon />
    </SearchButtonContainer>
  )
}