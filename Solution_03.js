const solution = (a, b) => {
    if (b.length>a.length) {
        return solution(b,a);
    } else {
        const br = b.split('').reverse();
        const [xs, carry] = a.split('')
            .reverse()
            .map((x, i) => Number.parseInt(x) + (i<b.length ? Number.parseInt(br[i]) : 0))
            .reduce(([xs, carry], n) => { 
                const x = n + carry;
                return x > 9 ? [[...xs, x - 10], 1] : [[...xs, x], 0];
            }, [[], 0]);
        return (carry === 0 ? xs : [...xs, carry]).reduce((acc, x) => `${x}${acc}`);
    }
};

console.assert(solution('364','1836') === '2200');
console.assert(solution('9','99') === '108');
console.assert(solution('1', '9999999999999999999999999999999999999999999') === '10000000000000000000000000000000000000000000');

