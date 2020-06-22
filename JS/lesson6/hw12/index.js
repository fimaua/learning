function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let unique = [];
    for (let one of array) {
        if (!unique.includes(one)) {
            unique.push(one);
        }
    }
    return unique;
}