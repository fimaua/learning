export const cloneArr = arr =>
    !Array
    .isArray(arr) ? null : arr
    .slice()