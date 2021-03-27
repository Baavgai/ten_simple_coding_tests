import { assertArraysEqual } from "./util.js";

const solution = xs => {
    const [acc, zs] = xs.reduce(([acc, zs], x) => x === 0 ? [acc, [...zs, x]] : [[...acc, x], zs], [[], []]);
    return [...acc, ...zs];
};

assertArraysEqual(solution([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
assertArraysEqual(solution([1, 7, 0, 0, 8, 0, 10, 12, 0, 4]), [1, 7, 8, 10, 12, 4, 0, 0, 0, 0]);