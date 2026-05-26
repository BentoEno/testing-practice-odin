export function cipher(str, gear) {
    if(typeof str !== 'string') { throw new Error('please input a string') }
    if(typeof str !== 'string') { throw new Error('this is not a number, please input a number') }

    const strArr = Array.from(str);
    
    return strArr.map(char => {
        if (!alphabet.includes(char.toLowerCase())) { return char }

        const uppercased = isUpperCase(char)
        const index = alphabet.findIndex(alp => alp === char.toLowerCase())
        const adjIndex = index + gear;
        const newIndex = adjIndex > 25 ? adjIndex - 26 : adjIndex;
        const newChar = alphabet[newIndex];

        return uppercased ? newChar.toUpperCase() : newChar;


    }).join('');
}

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}