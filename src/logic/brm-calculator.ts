import FormBrm, {ActivityLevel} from "../models/inteface-tdee";

export function MifflinStJeor(form: FormBrm) {

    const ActivityLevelFactors: Record<ActivityLevel, number> = {
        [ActivityLevel.Sedentary]: 1.2,
        [ActivityLevel.LightlyActive]: 1.375,
        [ActivityLevel.ModeratelyActive]: 1.55,
        [ActivityLevel.Active]: 1.725,
        [ActivityLevel.VeryActive]: 1.9,
    };

    let firstResult: number = 0;
    if ( form.gender === 'male') {
        firstResult = ((10*form.weight) + (6.25 * form.height) - (5 * form.age) + 5)
    } else if (form.gender === 'female') {
        firstResult = ((10 * form.weight) + (6.25 * form.height) - (5 * form.age) - 161)
    }
    
    const activityFactor = ActivityLevelFactors[form.activityLevel]

    const finalResult = firstResult * activityFactor
    
    return finalResult
}

export function KatchMcArdle(form: FormBrm) {
    const LBMCalc = form.weight * (100 - form.fatPercent) / 100
}