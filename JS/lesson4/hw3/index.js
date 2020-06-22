const n = 0;
const m = 1000;
let sum = 0;
for (let i = n; i <= m; i++) {
    if (i % 2 === 1) {
        sum += i;
        console.log("Found");
    }
}
if ((sum * 5) > 5000) {
    console.log("Bigger")
} else {
    console.log("Smaller or equal")
}