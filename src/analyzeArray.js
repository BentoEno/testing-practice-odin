export function analyzeArray(arr) {
    const length = arr.length;
    const average = (arr.reduce((total, num) => total + num, 0) / length);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return { average, min, max, length }
}