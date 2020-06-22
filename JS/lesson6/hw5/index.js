function reverseArray(arr) {
    let rev = new Array;
    if (!Array.isArray(arr)) {
        return null;
    }
    return rev.concat(arr).reverse();
}