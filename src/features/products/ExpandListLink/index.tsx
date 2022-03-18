import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { StyledLink, StyledText, StyledArrowIcon } from './styles'

export function ExpandListLink(props: {link: string}) {
  const router = useRouter();

  return (
    <StyledLink onClick={() => router.push(props.link)}>
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