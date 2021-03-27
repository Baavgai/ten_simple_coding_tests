
let state = { verbose: false };

export const getVerbose = () => state.verbose;

export const setVerbose = (verbose) => { state.verbose = verbose };

const writeVerbose = x => {
    if (state.verbose) {
        console.log(x);
    }
}

export const assertValuesEqual = (x, y) =>
    console.assert(x === y, x, y);

const compareArrays = (xs, ys, ordered = true) => {
    if (xs.length !== ys.length) {
        return false;
    } else if (ordered) {
        return JSON.stringify(xs) === JSON.stringify(ys);
    } else {
        return JSON.stringify(xs.sort()) === JSON.stringify(ys.sort());
    }
}

export const assertArraysEqual = (xs, ys, ordered = true) => {
    const pass = compareArrays(xs, ys, ordered);
    writeVerbose({pass, xs, ys, ordered});
    console.assert(pass, {xs, ys, ordered});
}
    

