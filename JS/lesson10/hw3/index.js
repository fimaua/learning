const num1 = -1.112423542461;
const round1 = 3;

const superRound = (num, round) => [
    Math.floor(num * (10 ** round)) / (10 ** round),
    Math.round(num * (10 ** round)) / (10 ** round),
    Math.ceil(num * (10 ** round)) / (10 ** round),
    Math.trunc(num * (10 ** round)) / (10 ** round),
    Number(num.toFixed(round)),
]