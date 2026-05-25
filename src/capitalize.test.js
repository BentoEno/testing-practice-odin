import { capitalize } from "./capitalize"

describe('capitalize first character', () => {
    it('First char of the word is not capitalized', () => {
        expect(capitalize('blengos'))
        .toBe('Blengos')
    });

    it('First char of the sentence is not capitalized', () => {
        expect(capitalize('blengos adalah enos'))
        .toBe('Blengos adalah enos');
    })
})

