const solution = n =>
    (n < 0 ? -1 : 1) * Number.parseInt(`${Math.abs(n)}`.split('').reduce((acc, x) => `${x}${acc}`));

console.assert(solution(-231) === -132);
console.assert(solution(345) === 543);
