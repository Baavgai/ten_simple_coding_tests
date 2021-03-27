import { createTester, compareArrays } from "./util.js";

const solution = n => {
    const sieve = new Array(n + 1).fill(0);
    const markOff = v => {
        if (sieve[v] === 0) {
            for(let i=v + v; i < n + 1; i += v) {
                sieve[i] = 1;
            }
        }
    };
    for(let i=2; i<n + 1; i++) {
        markOff(i);     
    }
    return sieve.map((x,i) => i < 2 ? undefined : (x === 0 ? i : undefined)).filter(x => x !== undefined);
}

const tester = createTester("primes", solution, compareArrays);
export const tests = [
    tester(35, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31])
];
