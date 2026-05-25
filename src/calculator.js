export const calculator = (function() {
    
    const nan = (n1 = 1, n2 =1) => {
       if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('this is not a number, please input a number')
    }}
    const sum = (n1 = 1, n2 = 1) => {
        nan(n1, n2);
        return n1 + n2;
    }
    
    const sub = (n1 = 1, n2 = 1) => {
        nan(n1, n2);
        return n1 - n2;
    }

    const mult = (n1 = 1, n2 = 1) => {
        nan(n1, n2);
        return n1 * n2;
    }

    const div = (n1 = 1, n2 = 1) => {
        nan(n1, n2);
        return n1 / n2;
    }

    return {sum, sub, mult, div}
})();