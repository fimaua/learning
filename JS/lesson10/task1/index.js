const arr1 = [1.1, 2.22, '3', 11, 22, 'false.12', 77, 33, 44, '4', 5, NaN, 7, 55];

const getFiniteNumbers = arr => arr
    .filter(num => Number.isFinite(num))

const getFiniteNumbersV2 = arr => arr
    .filter(num => isFinite(num))

const getNaN = arr => arr
    .filter(num => Number.isNaN(num))

const getNaNV2 = arr => arr
    .filter(num => isNaN(num))

const getIntegers = arr => arr
    .filter(num => Number.isInteger(num))