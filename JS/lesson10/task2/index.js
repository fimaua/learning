const arr1 = [1.1, 2.22, '3', 11, 22, 'false.12', 77, 33, 44, '4', 5, NaN, 7, 55];

const getParsedIntegers = arr => arr
    .map(num => Number.parseInt(num))

const getParsedIntegersV2 = arr => arr
    .map(num => parseInt(num))

const getParsedFloats = arr => arr
    .map(num => Number.parseFloat(num))

const getParsedFloatsV2 = arr => arr
    .map(num => parseFloat(num))