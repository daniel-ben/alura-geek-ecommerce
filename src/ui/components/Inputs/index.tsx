import { StyledInput, StyledLabel, StyledTextarea } from './styles';
import { InputProps, InputWithLabelProps } from './types';

export function SimpleInput(props: InputProps) {
  return <StyledInput 
    required={props.isRequired} 
    placeholder={props.placeholder} 
    type={props.type}
    className={props.className}
  />
}

export function InputWithLabel(props: InputWithLabelProps) {
  return (
    <StyledLabel>
      {props.label}
      <StyledInput 
        required={props.isRequired}
        type={props.type}
        className={props.className}
      />
    </StyledLabel>
  )
}

export function SimpleTextarea(props: InputProps) {
  return <StyledTextarea required={props.isRequired} placeholder={props.placeholder} />
}