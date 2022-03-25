import styled from "styled-components";
import { theme } from "@ui/theme";
import { PrimaryButton } from '@ui/components'

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
    padding: 64px;
    margin: 0 auto;
  }
`

export const StyledLabel = styled.label`
  ${theme.fonts.md}
  font-weight: 700;
  color: ${theme.colors.neutral[800]};
`

export const StyledImagePlaceholder = styled.div`
  height: 134px;
  width: 100%;
  background-color: white;
  border: 1px dashed ${theme.colors.neutral[300]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;

  @media (min-width: ${theme.breakpoints.sm}) {
    height: 152px;
    width: 254px;
  }
`

export const StyledParagraph = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.neutral[700]};
`

export const AddProductButton = styled(PrimaryButton)`
  width: 100%;
`
