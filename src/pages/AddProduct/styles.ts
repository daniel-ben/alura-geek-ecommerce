import styled from "styled-components";
import { theme } from "@ui/theme";
import { ParagraphProps } from "./types";
import { PrimaryButton, SecondaryButton } from '@ui/components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 32px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 600px;
    padding: 64px 0;
    margin: 0 auto;
  }
`

export const StyledLabel = styled.label`
  ${theme.fonts.md}
  font-weight: 700;
  color: ${theme.colors.neutral[800]};
`

export const AddImageSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const StyledImagePlaceholder = styled.div`
  width: 100%;
  padding: 32px;
  background-color: white;
  border: 1px dashed ${theme.colors.neutral[300]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 254px;
  }
`

export const StyledIcon = styled.div.attrs({
  alt: "",
})`
  background-image: url(/images/plus.svg);
  width: 18px;
  height: 18px;

  @media (min-width: ${theme.breakpoints.sm}) {
    background-image: url(/images/image-placeholder.svg);
    width: 32px;
    height: 32px;
  }
`

export const StyledSpan = styled.span`
  ${theme.fonts.sm}
  display: none;

  @media (min-width: ${theme.breakpoints.sm}) {
    display: block;
  }
`

export const AddImageButton = styled(SecondaryButton)`
  display: none;

  @media (min-width: ${theme.breakpoints.sm}) {
    display: block;
  }
`

export const StyledParagraph = styled.p<ParagraphProps>`
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.neutral[700]};
  text-align: center;
`

export const AddProductButton = styled(PrimaryButton)`
  width: 100%;
`
