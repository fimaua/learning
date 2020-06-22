function cloneArr(arr) {
    let clone = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    return clone.concat(arr);
}