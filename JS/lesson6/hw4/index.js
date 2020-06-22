function increaseEvenEl(arr, delta) {
    let numbers = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let num of arr) {
        if (num % 2 === 0) {
            numbers.push(num + delta);
        }
    }
    return numbers;
}