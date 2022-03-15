import styled from "styled-components";
import NextImage from "next/image";
import { theme } from "@ui/theme";
import { SecondaryButton } from "@ui/index";


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

// position relative needed for next image to work
const LogoWrapper = styled.div`
  min-height: 28px;
  min-width: 100px;
  position: relative; 

  @media (min-width: ${theme.breakpoints.md}) {
    height: 50px;
    width: 176px;
  }
`

const Logo = function() {
  return (
    <LogoWrapper>
      <NextImage 
        src={"/Logo.svg"} 
        alt="Logo"
        layout='fill'
      />
    </LogoWrapper>
  )
}

const SearchBarContainer = styled.div`
  background-color: ${theme.colors.neutral[100]};
  border-radius: 20px;
  padding: 12px;
  padding-left: 16px;
  width: 100%;
  max-width: 400px;

  display: none;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    
    ::placeholder {
      opacity: 0.5;
    }
  }

  img {
    opacity: 0.5;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    display: flex;
  }
`;

const SearchInput = styled.input`
  background-color: transparent;
`

const SearchIconContainer = styled.div`

  @media (min-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`

const SearchIcon = function() {
  return (
    <NextImage 
      src={"/search.svg"} 
      alt="Search" 
      width={17} 
      height={17}
      layout="fixed"
    />
  )
}

const SearchBar = function() {
  return (
    <SearchBarContainer>
      <SearchInput type="text" placeholder="O que deseja encontrar?" />
      <SearchIcon />
    </SearchBarContainer>
  );
}

const LoginButton = styled(SecondaryButton)`
  width: 100%;
  max-width: 166px;
`

const SearchButtonContainer = styled.div`
  display: block;

  @media (min-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`

const SearchButton = function() {
  return(
    <SearchButtonContainer>
      <SearchIcon />
    </SearchButtonContainer>
  )
}


export default function Header() {

  return (
    <StyledHeader>
      <LogoAndSearchBarContainer>
        <Logo />
        <SearchBar />
      </LogoAndSearchBarContainer>

      <LoginButton>Login</LoginButton>
      <SearchButton />
    </StyledHeader>
  )
}