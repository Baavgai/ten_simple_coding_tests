import { createTester } from "./util.js";

const solution = xs =>
    xs.every((x, i) => i == 0 || xs[i - 1] <= x)
    || xs.every((x, i) => i == 0 || xs[i - 1] >= x);

const tester = createTester("monotonic arr", solution);
export const tests = [
    tester([[6, 5, 4, 4]], true),
    tester([[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], false),
    tester([[1, 1, 2, 3, 7]], true),
];
