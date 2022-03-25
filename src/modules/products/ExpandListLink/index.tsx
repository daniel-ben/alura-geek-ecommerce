import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { StyledLink, StyledText, StyledArrowIcon } from './styles'
import { LinkProps } from './types';

export function ExpandListLink({ link }: LinkProps) {
  const router = useRouter();

  const handleClick = () => router.push(link);

  return (
    <StyledLink onClick={handleClick}>
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