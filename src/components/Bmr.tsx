import { useState } from 'react'
import Brm from '../models/inteface-tdee'
import CustomInput from './elements-imc/CustomInput'
import { Gender } from './elements-imc/Gender'

export const Brm = () => {
    const [form, setForm] = useState<Brm>()
    const [height, setHeight] = useState<number>()
    const handleHeightChange = (newHeight: number) => {
        setHeight(newHeight)
    }
    const [weight, setWeight] = useState<number>()
    const handleWeightChange = (newWeight: number) => {
        setWeight(newWeight)
    }
    const handleForm = () => {
    }
    return (
        <>
            <Gender />
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