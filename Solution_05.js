const solution = word => {
    for(let h = 0, t = word.length - 1; h<t -1; h++, t--) {
        if (word[h]!==word[t]) { return false; }
    }
    return true;
};

console.assert(solution('radkar'));