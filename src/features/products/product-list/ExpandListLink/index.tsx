import NextImage from 'next/image';
import { StyledLink, StyledText, StyledArrowIcon } from './styles'

export function ExpandListLink(props: {link: string}) {

  return (
    <StyledLink href={props.link}>
      <StyledText>Ver tudo</StyledText>
      <StyledArrowIcon>
        <NextImage
          src="/images/arrow.svg"
          alt="arrow icon"
          layout="fill"
        />
      </StyledArrowIcon>
    </StyledLink>
  )
}