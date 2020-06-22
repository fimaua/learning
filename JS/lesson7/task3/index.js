const flatArray = arr => arr
    .reduce((acc, num) => acc
        .concat(num), [])