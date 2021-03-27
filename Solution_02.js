import { createTester } from "./util.js";

const solution = msg => {
    const [ct, tot] = msg.split(/\W/)
        .map(x => x.trim().length)
        .filter(x => x > 0)
        .reduce(([ct, tot], n) => ([ct + 1, tot + n]), [0, 0]);
    return Math.round(((tot / ct) + Number.EPSILON) * 100) / 100;
};

const tester = createTester("avg word len", solution);
export const tests = [
    tester("Hi all, my name is Tom...I am originally from Australia.",
        3.82),
    tester("I need to work very hard to learn more about algorithms in JavaScript!",
        4.38)
];
