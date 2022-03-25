import { StyledInput, StyledLabel, StyledTextarea } from './styles';
import { InputProps, InputWithLabelProps } from './types';

export function SimpleInput({ isRequired, placeholder, type, className}: InputProps) {
  return <StyledInput 
    required={isRequired} 
    placeholder={placeholder} 
    type={type}
    className={className}
  />
}

export function InputWithLabel({label, isRequired, type, className}: InputWithLabelProps) {
  return (
    <StyledLabel>
      {label}
      <StyledInput 
        required={isRequired}
        type={type}
        className={className}
      />
    </StyledLabel>
  )
}

export function SimpleTextarea({isRequired, placeholder}: InputProps) {
  return <StyledTextarea required={isRequired} placeholder={placeholder} />
}