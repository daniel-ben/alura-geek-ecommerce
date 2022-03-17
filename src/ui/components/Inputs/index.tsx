import styled from "styled-components"
import { theme } from "@ui/theme"

export const StyledInput = styled.input`
  ${theme.fonts.sm}
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 0 1px ${theme.colors.neutral[300]};
  resize: none;

  &::placeholder {
    color: ${theme.colors.neutral[400]};
  }
`

const StyledLabel = styled(StyledInput).attrs({
  as: "label",
})`
  display: flex;
  flex-direction: column;
  background-color: white;

  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.neutral[400]};

  & > input {
    box-shadow: none;
  }
`

export const StyledInputWithLabel = function(props:{ children: React.ReactNode, isRequired: boolean }) {
  return (
    <StyledLabel>
      {props.children}
      <StyledInput required={props.isRequired}/>
    </StyledLabel>
  )
}

export const StyledTextarea = styled(StyledInput).attrs({
  as: "textarea",
  rows: 3,
})`
  resize: none;
`