const solution = s => {
    const m = s.split('').reduce((m, c, idx) => {
        if (c in m) { m[c].ct += 1; } else { m[c] = { idx, ct: 1 }; }
        return m;
    }, {});
    const found = Object.keys(m).filter(k => m[k].ct === 1).map(k => m[k].idx);
    return found.length === 0 ? -1 : Math.min(...found);
};

[['alphabet',1], ['barbados',2], ['crunchy',1],['xxxxx',-1] ].forEach(([word, answer]) => {
    console.assert(solution(word) === answer, word, answer);
});
