let defaultNumber = 0;

export const add = num =>
    defaultNumber += num

export const decrease = num =>
    defaultNumber -= num

export const reset = () =>
    defaultNumber = 0

export const getMemo = () =>
    defaultNumber