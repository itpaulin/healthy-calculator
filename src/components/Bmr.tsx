import { useState } from 'react'
import FormBrm, { Gender } from '../models/inteface-tdee'
import CustomInput from './elements-imc/CustomInput'
import RadioInput from './elements-imc/RadioInput';
import { MifflinStJeor, KatchMcArdle } from '../logic/tmb-calculator';


interface Props {
    formData: FormBrm;
    setFormData: React.Dispatch<React.SetStateAction<FormBrm>>;
}

export const TMB: React.FC<Props> = () => {

    const [formData, setFormData] = useState<FormBrm>({})
    const [resultTmb, setResultTmb] = useState<number>()
    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, gender: e.target.value as Gender })
        
    }
    
    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, age: Number(e.target.value) })
    }
    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, height: Number(e.target.value) })
    }
    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, weight: Number(e.target.value) })
    }
    const handleFatPercentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, fatPercent: Number(e.target.value) })
        if(formData.weight & formData.height & formData.age) handleKatchMcArdle()
    }
    const [hasBF, setHasBF] = useState<boolean>()
    const handleKatchMcArdle = () => {
        console.log(setResultTmb(KatchMcArdle(formData)))
    }
    return (
        <div className='mx-2'>
            <fieldset className='flex' id='radio-gender' >
                <legend className=''> Sexo </legend>
                <div className='px-3 flex'>
                    <div className='pr-8'> 
                    <RadioInput
                        id="gender-male"
                        name="gender"
                        onChange={handleGenderChange}
                        label="Masculino"
                        defaultChecked
                    />
                    </div>
                    <RadioInput
                        id='gender-female'
                        name='gender'
                        onChange={handleGenderChange}
                        label='Feminino'
                    />
                </div>
            </fieldset>
            <fieldset>
                <CustomInput 
                    id="age"
                    sizing="sm"
                    type="number"
                    placeholder='20 Anos'
                    label="Idade"
                    value={formData.age}
                    onChange={handleAgeChange}
                />
                <CustomInput 
                    id="height"
                    sizing="sm"
                    type="number"
                    placeholder='185 cm'
                    label="Altura (cm)"
                    value={formData.height}
                    onChange={handleHeightChange}
                />
                <CustomInput 
                    id="weight"
                    sizing="sm"
                    type="number"
                    placeholder='75.2 kg'
                    label="Peso (kg)"
                    value={formData.weight}
                    onChange={handleWeightChange}  
                />
            </fieldset>
            <fieldset>
                <legend> Sabe seu percentual de gordura (BF%)?</legend>
                <div className='flex justify-around pt-2'>
                <RadioInput 
                    id="hasBodyFatPercent"
                    name="hasBodyFatPercent"
                    onChange={() => { setHasBF(true)}}
                    label='Sim'
                />
                <RadioInput 
                    id="hasBodyFatPercent"
                    name="hasBodyFatPercent"
                    onChange={() => { setHasBF(false)}}
                    label='Não'
                />
                </div>
                {hasBF && (
                    <div className='pt-2'>
                        <CustomInput 
                            id="fatPercent"
                            sizing="sm"
                            type="number"
                            placeholder='Quantos %?'
                            label="Percentual de gordura"
                            value={formData.fatPercent}
                            onChange={() => {handleFatPercentChange}}
                            />
                    </div>
                )}
                
                {resultTmb && (
                    <div>
                        <h1> Sua taxa metabólica basal: </h1>
                        <span className='bg-green-400 font-bold font-RobotoRegular'>{resultTmb}</span>
                    </div>
                )}
                
            </fieldset>

            <button onClick={handleKatchMcArdle}>TESTE</button>
        </div>
    )
}