function findDivCount(a, b, n) {
    let m = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            m++;
        }
    }
    return m;
}