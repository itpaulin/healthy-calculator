import { Tabs } from 'flowbite-react'
import {FaBalanceScaleRight} from 'react-icons/fa'
import {GiWeightLiftingUp} from 'react-icons/gi'
import FitnessSvg from './assets/undraw_fitness_stats_sht6';
import { IMC } from './components/IMC'
function App() {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-50 px-2">
      <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 w-full lg:w-1/3">
        <div>
          <h1 className='font-Graphik text-center'>ALCANCE SEUS OBJETIVOS</h1>
        </div>
        <div className="flex h-32 w-full justify-center object-cover mb-4">
          <FitnessSvg />
        </div>
        <div className='lg:p-4'>
          <div className='mb-4'>
            <Tabs.Group
              aria-label="Type Calculator"
              className='flex justify-center '
              style="underline">
              <Tabs.Item
                className=''
                active
                icon={FaBalanceScaleRight}
                title="IMC"
              ><p className='font-semibold text-center'> Calcule seu Índice de Massa Corporal e encontre sua faixa de peso ideal</p>
                <IMC />
               </Tabs.Item>
              <Tabs.Item
                icon={GiWeightLiftingUp}
                title="Macros"
              ><p className='font-semibold text-center'>Calcule seu gasto calórico e defina uma dieta alimentar de acordo com seu objetivo</p></Tabs.Item>
            </Tabs.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
