import { Label, Radio } from 'flowbite-react'

interface RadioButtonProps {
  id: string
  name: string
  label: string
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (value: any) => void
}

const RadioInput: React.FC<RadioButtonProps> = ({
  id,
  name,
  label,
  defaultChecked = false,
  disabled = false,
  onChange,
}) => {
  const handleRadioChange = () => {
    if(onChange) {
      onChange(value);
    }
  }
  return (
    <div className="flex items-center gap-2">
      <Radio
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleRadioChange}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}

export default RadioInput
