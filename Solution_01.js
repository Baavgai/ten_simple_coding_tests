import { createTester } from "./util.js";

const solution = n =>
    (n < 0 ? -1 : 1) * Number.parseInt(`${Math.abs(n)}`.split('').reduce((acc, x) => `${x}${acc}`));

const tester = createTester("reverse int", solution);
export const tests = [
    tester(-231, -132),
    tester(345, 543)
];
