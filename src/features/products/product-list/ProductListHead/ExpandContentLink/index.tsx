import styled from "styled-components"
import { theme } from "@ui/theme"
import { ArrowIcon } from "./ArrowIcon"

const StyledLink = styled.a`
width: fit-content;
display: flex;
align-items: center;
`

const StyledText = styled.p`
${theme.fonts.xs};
font-weight: 700;
color: ${theme.colors.primary[400]};
padding-right: 12px;

@media (min-width: ${theme.breakpoints.sm}) {
  ${theme.fonts.sm}
}
`

export function ExpandContentLink(props: {link: string}) {

  return (
    <StyledLink href={props.link}>
      <StyledText>Ver tudo</StyledText>
      <ArrowIcon />
    </StyledLink>
  )
}