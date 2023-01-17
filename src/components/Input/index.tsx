import { InputStyle } from './style'

interface IInput {
  id: string
  type: any
  min?: number
  max?: number
  placeholder?: string
  maxLength?: number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string | number | readonly string[] | undefined
  required: boolean
}

function Input({ id, type, min, max, placeholder, maxLength, onChange, value, required }: IInput) {

  return (
    <InputStyle
      id={id}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      value={value}
      required={required}
    />
  )
}

export default Input
