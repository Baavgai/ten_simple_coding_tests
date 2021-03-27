import { createTester } from "./util.js";

const solution = s => {
    const m = s.split('').reduce((m, c, idx) => {
        if (c in m) { m[c].ct += 1; } else { m[c] = { idx, ct: 1 }; }
        return m;
    }, {});
    const found = Object.keys(m).filter(k => m[k].ct === 1).map(k => m[k].idx);
    return found.length === 0 ? -1 : Math.min(...found);
};

const tester = createTester("first unique char", solution);
export const tests = [
    tester('alphabet', 1),
    tester('barbados', 2),
    tester('crunchy', 1),
    tester('xxxxx', -1),
];
