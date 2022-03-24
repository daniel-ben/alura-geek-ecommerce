import styled from "styled-components"
import { theme } from "@ui/theme"

export const StyledInput = styled.input`
  ${theme.fonts.sm}
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 0 1px ${theme.colors.neutral[300]};
  resize: none;
  background-color: white;

  &::placeholder {
    color: ${theme.colors.neutral[400]};
  }
`

export const StyledLabel = styled(StyledInput).attrs({
    as: "label",
  })`
    display: flex;
    flex-direction: column;

    font-size: 12px;
    line-height: 16px;
    color: ${theme.colors.neutral[400]};

    & > input, textarea {
      box-shadow: none;
    }
`

export const StyledTextarea = styled(StyledInput).attrs({
  as: "textarea",
  rows: 3,
})`
  resize: none;
`