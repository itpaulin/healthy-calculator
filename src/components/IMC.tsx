import CustomInput from './elements-imc/CustomInput'
import { useState } from 'react'
import { ImcCalc } from '../logic/imc-calculator'
import { Button }from 'flowbite-react'
import { HealthyBar } from './elements-imc/HealthyBar'

export const IMC = () => {
    const [faixaIMC, setFaixaIMC] = useState<string>()
    const [resultIMC , setResultIMC] = useState<number>()
    const [percentage, setPercentage] = useState<number>()
    const [height, setHeight] = useState<number>()
    const handleHeightChange = (newHeight: number) => {
        setHeight(newHeight)
    }
    const [weight, setWeight] = useState<number>()
    const handleWeightChange = (newWeight: number) => {
        setWeight(newWeight)
    }
    const handle = (e: React.MouseEvent<HTMLButtonElement>, weight: number, height: number) => {
        e.preventDefault()
        if (weight !== undefined && height !== undefined) {  
            const result = ImcCalc(weight, height);
            if (result < 18.5) {
              setFaixaIMC('Abaixo do peso');
              setPercentage(10); 
            } else if (result >= 18.5 && result < 24.9) {
              setFaixaIMC('Peso ideal');
              setPercentage(40);
            } else if (result >= 24.9 && result < 29.9) {
              setFaixaIMC('Sobrepeso');
              setPercentage(70);
            } else {
              setFaixaIMC('Obesidade');
              setPercentage(90);
            }
            setResultIMC(result)
        }
      }
      
    return (
        <form>
            <div>    
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
            </div>
            <div className='flex justify-center'>
                <Button gradientDuoTone="cyanToBlue" onClick={(e) => handle(e, weight || NaN, height || NaN)}> CALCULAR </Button>
            </div>
            {!Number.isNaN(resultIMC) && <div className='mt-5'>
                <HealthyBar percentage={percentage}/>
                {faixaIMC !== undefined && <h1 className='mt-5'>Seu IMC se encontra na faixa de <h1 className='font-semibold'>{faixaIMC}: {resultIMC?.toFixed(2)}</h1></h1>}
            </div> }
            
        </form>
    )
}
