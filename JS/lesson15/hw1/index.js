export const createCalculator = () => {

    let defaultNumber = 0;

    function add(num) {
        defaultNumber += num
    }

    function decrease(num) {
        defaultNumber -= num
    }

    function reset() {
        defaultNumber = 0
    }

    function getMemo() {
        return defaultNumber
    }

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}