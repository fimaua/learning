function includes(arr, num) {
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i of arr) {
        if (i === num) {
            return true
        }
    }
    return false
}