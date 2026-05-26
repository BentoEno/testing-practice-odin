import { analyzeArray } from './analyzeArray.js'

describe('Array Number Validation', () => {
    const obj = analyzeArray([1,8,3,4,2,6])
    it('average is incorrect', () => {
        expect(obj.average).toBe(4)
    });

    it('min value is incorrect', () => {
        expect(obj.min).toBe(1)
    });

    it('max value is incorrect', () => {
        expect(obj.max).toBe(8)
    });

    it('array length is incorrect', () => {
        expect(obj.length).toBe(6)
    });
})