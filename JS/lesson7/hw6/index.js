const sum = arr => !Array
    .isArray(arr) ? null : arr
    .reduce((acc, num) => acc + num, 0)