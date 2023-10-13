export enum Gender {
    Male = 'male',
    Female = 'female'    
}
export enum ActivityLevel {
    Sedentary = 'Sedentary',
    LightlyActive = 'Lightly Active',
    ModeratelyActive = 'Moderately Active',
    Active = 'Active',
    VeryActive = 'Very Active'
}
interface FormBrm {
    gender: Gender,
    age: number,
    height: number,
    weight: number,
    fatPercent: number,
    activityLevel: ActivityLevel;
}

export default FormBrm;