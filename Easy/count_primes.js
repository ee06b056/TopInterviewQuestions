/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;
    else if (n == 3) return 1;
    else {
        let l = Math.floor((n - 4) / 2) + 1;
        let primes = new Array(l).fill(true);
        for (let i = 0; Math.pow((2 * i + 3), 2) <= (2 * l + 1); i++) {
            if (primes[i]) {
                let p = 2 * i + 3;
                for (let j = p; j * p <= (2 * l + 1); j += 2) {
                    primes[(j * p - 3) / 2] = false;
                }
            }
        }
        let ans = 0;
        for (let prime of primes) {
            if (prime) ans++;
        }
        return ans + 1;
    }
};