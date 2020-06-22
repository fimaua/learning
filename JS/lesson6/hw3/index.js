function checkSum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let num of arr) {
        sum += num;
    }
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}