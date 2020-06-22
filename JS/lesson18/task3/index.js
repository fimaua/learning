export function sumOfSquares() {
    return [].reduce.apply(arguments, [(acc, elem) => {
        return acc += elem ** 2;
    }, 0]);
};