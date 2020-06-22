function getPrimes(n) {
    const m = 2;
    nextPrime:
        for (let i = m; i <= n; i++) {
            for (let j = m; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }
            console.log(i);
        }
}

function isPrime(m) {
    for (let i = 2; i < m; i += 1) {
        if (m % i === 0) {
            return false
        }

    }
    return true
}