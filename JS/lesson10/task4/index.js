const arr1 = [1.1, -2.22, '-333', 11, -22, 77, 33, -44, '4', 5, -7, 55];

const getMaxAbsoluteNumber = arr =>
    (!Array.isArray(arr) || (arr.length == 0)) ?
    null :
    Math.max(...arr.map(num => Math.abs(num)))