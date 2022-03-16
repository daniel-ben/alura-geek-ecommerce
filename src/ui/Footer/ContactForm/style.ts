import styled from 'styled-components'
import { theme } from '@ui/theme'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-grow: 1;
    width: auto;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 50%;
  }
`

export const StyledFormLabel = styled.p`
  ${theme.fonts.sm}
  font-weight: 700;
`

export const StyledInputLabel = styled.label`
  display: flex;
  flex-direction: column;

  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 1px ${theme.colors.neutral[300]};
  background-color: white;

  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.neutral[400]};
`

export const StyledInput = styled.input`
  ${theme.fonts.sm}
  margin-top: 4px;
`

export const StyledTextarea = styled.textarea`
  ${theme.fonts.sm}
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 0 1px ${theme.colors.neutral[300]};
  resize: none;
`