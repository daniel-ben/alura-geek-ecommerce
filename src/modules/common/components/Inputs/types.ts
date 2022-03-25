type BasicInputProps = {
  isRequired?: boolean,
  type?: string,
  className?: string,
}

export type InputProps = BasicInputProps & {
  placeholder: string,
}

export type InputWithLabelProps = BasicInputProps & {
  label: string,
}