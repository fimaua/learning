function getSubArray(arr, len) {
    let sub = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    sub = sub.concat(arr);
    sub.length = len;
    return sub;
}