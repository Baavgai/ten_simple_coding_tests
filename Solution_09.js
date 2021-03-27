import { createTester, compareArrays } from "./util.js";

const solution = (sentence1, sentence2) => {
    let m = {};
    sentence1.split(' ').forEach(x => m[x] = 1);
    sentence2.split(' ').forEach(x => { if (x in m) { m[x] |= 2; } else { m[x] = 2; } });
    return Object.keys(m).reduce(([xs, ys], k) => m[k] === 3 ? [xs, [...ys, k]] : [[...xs, k], ys], [[], []])
}

const tester = createTester("matched words", solution,
    (xs, ys) => compareArrays(xs[0], ys[0], false) && compareArrays(xs[1], ys[1], false));
export const tests = [
    tester([
        'We are really pleased to meet you in our city',
        'The city was hit by a really heavy storm'
    ], [
        ['We', 'to', 'heavy', 'The', 'storm', 'meet', 'hit', 'pleased', 'are', 'by', 'a', 'in', 'was', 'you', 'our'],
        ['really', 'city']
    ])
];
