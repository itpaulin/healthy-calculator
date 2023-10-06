enum Gender {
    Male = 'male',
    Female = 'female'    
}
interface Bmr {
    gender: Gender,
    age: number,
    height: number,
    weight: number,
    fatPercent: number,
}

export default Bmr;