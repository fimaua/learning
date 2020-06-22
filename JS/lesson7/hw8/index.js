const arrAverage = arr => !Array
    .isArray(arr) ? null : arr.reduce((sum, num) => sum + num) / arr.length;