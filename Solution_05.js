import { createTester } from "./util.js";

const solution = word => {
    for(let h = 0, t = word.length - 1; h<t -1; h++, t--) {
        if (word[h]!==word[t]) { return false; }
    }
    return true;
};

const tester = createTester("palindrome", solution);
export const tests = [
    tester('radkar', true),
    tester('alice', false),
    tester('bob', true),
];
