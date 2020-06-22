function swap(arr) {
    const [start, ...end] = arr;
    return [...end, start];
}