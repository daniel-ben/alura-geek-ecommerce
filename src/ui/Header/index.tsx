import styled from "styled-components";
import { theme } from "@ui/theme";
import { Logo } from "@ui/components";
import { SearchBar } from "./SearchBar";
import { LoginButton } from "./LoginButton";
import { SearchButton } from "./SearchButton";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 16px;
  height: 72px;

  @media (min-width: ${theme.breakpoints.sm}) {
    margin: 0 32px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 80%;
    height: 115px;
    margin: auto;
  }
`

const LogoAndSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 52%;
  }
`

export default function Header() {

  return (
    <StyledHeader>
      <LogoAndSearchBarContainer>
        <Logo variant='header'/>
        <SearchBar />
      </LogoAndSearchBarContainer>

      <LoginButton>Login</LoginButton>
      <SearchButton />
    </StyledHeader>
  )
}