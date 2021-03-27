import { assertArraysEqual, setVerbose } from "./util.js";

setVerbose(true);

const solution = (sentence1, sentence2) => {
    let m = {};
    sentence1.split(' ').forEach(x => m[x] = 1);
    sentence2.split(' ').forEach(x => { if (x in m) { m[x] |= 2; } else { m[x] = 2; } });
    return Object.keys(m).reduce(([xs, ys], k) => m[k] === 3 ? [xs, [...ys, k]] : [[...xs, k], ys], [[], []])
}

const [aIn, aOut] = solution(
    'We are really pleased to meet you in our city',
    'The city was hit by a really heavy storm'
);

assertArraysEqual(aIn, ['We', 'to', 'heavy', 'The', 'storm', 'meet', 'hit', 'pleased', 'are', 'by', 'a', 'in', 'was', 'you', 'our'], false);
assertArraysEqual(aOut, ['really', 'city'], false);

/*

s.split('').reduce((m, c, idx) => {
    if (c in m) { m[c].ct += 1; } else { m[c] = { idx, ct: 1 }; }
    return m;
}, {});
const found = Object.keys(m).filter(k => m[k].ct === 1).map(k => m[k].idx);


const arrayTest = (xs, ys) =>
    console.assert(JSON.stringify(xs) === JSON.stringify(ys), xs, ys);

arrayTest(solution([1, undefined, 2, 3, undefined, undefined, 5, undefined]), [1, 1, 2, 3, 3, 3, 5, 5]);





// assert solution(sentence1, sentence2) == ({'We', 'to', 'heavy', 'The', 'storm', 'meet', 'hit',     'pleased', 'are', 'by', 'a', 'in', 'was', 'you', 'our'}, {'really', 'city'})
*/
