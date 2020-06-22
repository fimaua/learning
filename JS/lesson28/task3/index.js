export const mult = num1 => num2 => num1 * num2

export const twice = val => mult(val)(2)

export const triple = val => mult(val)(3)