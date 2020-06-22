export const getMinSquaredNumber = arr =>
    (!Array.isArray(arr) || (arr.length == 0)) ?
    null :
    Math.min(...arr.map(num => Math.pow(Math.abs(num), 2)))