import { reverseStr } from "./reverseStr.js";

describe('Reversed String Validation', () => {
    it('reverse a word', () => {
        expect(reverseStr('Bento'))
        .toBe('otneB')
    });

    it('reverse a palindrom', () => {
        expect(reverseStr('racecar'))
        .toBe('racecar')
    });

    it('reverse a sentence', () => {
        expect(reverseStr('TOP is the Greatest'))
        .toBe('tsetaerG eht si POT')
    });

    it('reverse one word', () => {
        expect(reverseStr('a'))
        .toBe('a')
    });

    it('reverse empty string', () => {
        expect(reverseStr(''))
        .toBe('')
    });

    it('reverse one word with a space', () => {
        expect(reverseStr(' olleh'))
        .toBe('hello ')
    });
})