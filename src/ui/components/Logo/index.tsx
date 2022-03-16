import styled from "styled-components";
import NextImage from "next/image";
import { theme } from "@ui/theme";

// position relative needed for next image to work
const LogoWrapper = styled.div`
  min-height: 50px;
  min-width: 176px;  
  position: relative; 
`

const HeaderLogo = styled(LogoWrapper)`
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
    min-height: 28px;
    min-width: 100px;    
  }
`

export const Logo = function(props: {variant?: string}) {
  const LogoImage = () => (
    <NextImage 
      src={"/images/Logo.svg"} 
      alt="logo" 
      layout='fill'
    />
  )

  if (props.variant === "header") {
    return (
      <HeaderLogo>
        <LogoImage />
      </HeaderLogo>
    )
  } 

  return (
    <LogoWrapper>
      <LogoImage />
    </LogoWrapper>
  )
}