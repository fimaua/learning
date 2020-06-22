function squareArray(arr) {
    let square = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let num of arr) {
        square.push(num * num)
    }
    return square;
}