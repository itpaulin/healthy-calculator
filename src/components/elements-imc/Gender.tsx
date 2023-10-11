import { Label, TextInput, Radio } from 'flowbite-react'
export function GenderInput() {
    return (
        <>
           <Label className=" mb-1">
                Sexo
            </Label>
            <div className='flex max-w-md flex-row gap-4 justify-center'>
                <div className="flex items-center gap-2">
                    <Radio defaultChecked name="gender" value="male" />
                    <Label htmlFor="masculino">
                        Masculino
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio  name="gender" value="female" />
                    <Label htmlFor="Feminino">
                        Feminino
                    </Label>
                </div>
            </div>
        </>
    );
}

