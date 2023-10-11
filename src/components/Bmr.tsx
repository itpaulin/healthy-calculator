import { useState } from 'react'
import FormBrm from '../models/inteface-tdee'
import CustomInput from './elements-imc/CustomInput'
import { GenderInput } from './elements-imc/Gender'

export const Brm = () => {
    const [formData, setFormData] = useState<FormBrm>({})
    
    const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, gender: e.target.value})
    }

    return (
        <>
            <GenderInput />
            <CustomInput 
                id="height"
                sizing="sm"
                type="number"
                placeholder='185 cm'
                label="Altura (cm)"
                value={height}
                onChange={handleHeightChange}
            />
            <CustomInput 
                id="weight"
                sizing="sm"
                type="number"
                placeholder='75.2 kg'
                label="Peso (kg)"
                value={weight}
                onChange={handleWeightChange}  
            />

        </>
    )
}