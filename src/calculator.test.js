import { calculator } from "./calculator.js";

describe('calculator authentication', () => {
    it('the addition is incorrect', () => {
        expect(calculator.sum(2, 2))
        .toBe(4)
    });

    it('the subtraction is incorrect', () => {
        expect(calculator.sub(6,6))
        .toBe(0)
    });

    it('the multiplication is incorrect', () => {
        expect(calculator.mult(2,2))
        .toBe(4)
    });

    it('the division is incorrect', () => {
        expect(calculator.div(4,4))
        .toBe(1)
    });

    it('the multiple step calculation is incorrect', () => {
        expect(calculator.sum(calculator.mult(2,5),calculator.sub(7,5)))
        .toBe(12)
    });

    it('number assumption is incorrect', () => {
        expect(calculator.sum(2))
        .toBe(3)
    });

    it('non-number processed incorrectly', () => {
        expect(() => calculator.sum('1'))
        .toThrow('this is not a number, please input a number')
    });
})