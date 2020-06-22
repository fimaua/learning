function checker(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = min + max;
    if (sum > 1000) {
        return true;
    } else {
        return false;
    }
}