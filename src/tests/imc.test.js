import { expect, test } from 'vitest'
import { ImcCalc } from '../logic/imc-calculator'

test('should be IMC 75kg 185m', () => {
    expect(ImcCalc(75, 185).toFixed(2)).toBe("21.91")
})