import { createTester, compareArrays } from "./util.js";

const solution = xs =>
    xs.reduce((acc, x, i) => i === 0 ? [x] : [...acc, (x === undefined ? acc[i-1] : x) ], []);

const tester = createTester("fill blanks", solution, compareArrays);
export const tests = [
    tester([[1, undefined, 2, 3, undefined, undefined, 5, undefined]], [1, 1, 2, 3, 3, 3, 5, 5])
];
