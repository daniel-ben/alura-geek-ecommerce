type BasicInputProps = {
  isRequired?: boolean,
  type?: string,
}

export type InputProps = BasicInputProps & {
  placeholder: string,
}

export type InputWithLabelProps = BasicInputProps & {
  label: string,
}

export type TextareaWithLabelProps = InputWithLabelProps & {
  rows?: number,
}