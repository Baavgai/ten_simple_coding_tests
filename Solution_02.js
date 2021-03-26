const sentence1 = "Hi all, my name is Tom...I am originally from Australia.";
const sentence2 = "I need to work very hard to learn more about algorithms in Python!";

const solution = msg => {
    const [ct,tot] = msg.split(/\W/)
        .map(x => x.trim().length)
        .filter(x => x > 0)
        .reduce(([ct,tot], n) => ([ct + 1, tot + n]), [0,0]);
    return Math.round(((tot / ct) + Number.EPSILON) * 100) / 100;
};

console.assert(solution(sentence1) == 3.82);
console.assert(solution(sentence2) == 4.08);
