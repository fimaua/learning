const n = 1;
const m = 1000;
let sum = 0;
for (let i = n; i <= m; i++) {
    sum += i;
}
console.log(Math.trunc(sum / 1234) > (sum % 1234));