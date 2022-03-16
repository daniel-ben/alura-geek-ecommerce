import NextImage from 'next/image';
import styled from "styled-components"
import { theme } from "@ui/theme"

const ArrowIconContainer = styled.span`
position: relative;
width: 10px;
height: 10px;

@media (min-width: ${theme.breakpoints.sm}) {
  width: 16px;
  height: 16px;  
}
`

export const ArrowIcon = function() {
return (
  <ArrowIconContainer>
    <NextImage
      src="/images/arrow.svg"
      alt="arrow icon"
      layout="fill"
    />
  </ArrowIconContainer>
)
}