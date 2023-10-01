import { Label, TextInput } from 'flowbite-react'
import React, { InputHTMLAttributes } from 'react'

interface CustomInputProps {
    label: string;
    value?: number;
    onChange: (value: number) => void;
    id: string;
    sizing: string;
    type: string;
    placeholder: string;
}
const CustomInput: React.FC<CustomInputProps> = ({ label, value, onChange, id, sizing, type, placeholder }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        onChange(newValue);
    };
    
    return (
        <div className="mb-2 block">
            <Label htmlFor={id} value={label}
            />
            <TextInput
              id={id}
              sizing={sizing}
              type={type}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              required
            />
          </div>
       )
}

export default CustomInput;