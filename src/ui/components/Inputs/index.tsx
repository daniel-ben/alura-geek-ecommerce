import { StyledInput, StyledLabel, StyledTextarea } from './styles';
import { InputProps, InputWithLabelProps, TextareaWithLabelProps } from './types';

export function SimpleInput(props: InputProps) {
  return <StyledInput 
    required={props.isRequired} 
    placeholder={props.placeholder} 
    type={props.type}
  />
}

export function InputWithLabel(props: InputWithLabelProps) {
  return (
    <StyledLabel>
      {props.label}
      <StyledInput 
        required={props.isRequired}
        type={props.type}
      />
    </StyledLabel>
  )
}

export function SimpleTextarea(props: InputProps) {
  return <StyledTextarea required={props.isRequired} placeholder={props.placeholder} />
}

export function TextareaWithLabel(props: TextareaWithLabelProps) {
  return (
    <StyledLabel>
      {props.label}
      <StyledTextarea required={props.isRequired} />
    </StyledLabel>
  )
}