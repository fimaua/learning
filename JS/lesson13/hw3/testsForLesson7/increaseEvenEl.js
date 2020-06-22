export const increaseEvenEl = (arr, delta) =>
    !Array.isArray(arr) ? null : arr
    .map(even => even % 2 === 0 ? even + delta : even)