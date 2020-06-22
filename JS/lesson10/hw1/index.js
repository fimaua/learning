const arr1 = [1.1, 2.22, 11, 22, 7.7, 33, 4.4, 5, 7, 55, 0.118];

const getTotalPrice = arr =>
    '$' + Math.floor(arr
        .reduce((sum, item) => sum + item, 0) * 100) / 100