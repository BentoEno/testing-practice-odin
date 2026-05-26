import { cipher } from "./caesarCipher.js";

describe('ciphering validation', () => {
    it('failed to return simple word', () => {
        expect(cipher('xyz', 3))
        .toBe('abc');
    });

    it('failed to return varied-cased word', () => {
        expect(cipher('HeLLo', 3))
        .toBe('KhOOr');
    });

    it('failed to return word w/ punctuation', () => {
        expect(cipher('Hello, World!', 3))
        .toBe('Khoor, Zruog!');
    });

})