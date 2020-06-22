export const createArrayOfFunctions = num => {
    let res = []
    for (let i = 0; i < num; i++) {
        res[i] = function() {
            return i
        }
    }
    return (typeof(num) === 'number' || typeof(num) === 'undefined') ? res : null
}