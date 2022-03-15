import styled from "styled-components";
import NextImage from "next/image";
import { theme } from "@ui/theme";

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

export const Logo = function() {
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