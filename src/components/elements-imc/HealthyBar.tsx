import { CgPin } from 'react-icons/cg'
interface Props {
    percentage?: number
}

export const HealthyBar = (props: Props) => {
    return (
        <>
        {props.percentage &&  (<div className="rounded-sm relative h-4 lg:h-7 w-full bg-gradient-to-r from-blue-400 via-green-700 to-red-600">
                            <CgPin
                                className=" absolute top-4 lg:top-7 transform rotate-180 h-6 w-8 text-black"
                                style={{ left: `${props.percentage}%` }}
                            ></CgPin>
                            </div>
                        )
        }
           
        </>
    )
}

