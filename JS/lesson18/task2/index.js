'use strict'
export const wallet = {
    transactions: [1, 5, 89, 337, 3, -2],
    getMax() {
        return Math.max(...this.transactions)
    },
    getMin() {
        return Math.min(...this.transactions)
    },
}