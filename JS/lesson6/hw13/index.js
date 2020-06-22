function uniqueCount(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let unique = [];
    for (let one of arr) {
        if (!unique.includes(one)) {
            unique.push(one);
        }
    }
    return unique.length;
}