const testSolution = (name, solution, fargs, answer, isEqual = undefined) => {
    const result = Array.isArray(fargs) ? solution(...fargs) : solution(fargs);
    const pass = isEqual === undefined ? result === answer : isEqual(result, answer);
    return { pass, name, args: fargs, result, answer };
};

export const createTester = (name, solution, isEqual = undefined) =>
    (solutionArgs, answer) =>
        () => testSolution(name, solution, solutionArgs, answer, isEqual);

export const runTests = tests =>
    tests
        .map(f => f())
        .forEach(({ pass, name, ...x }) => {
            if (pass) {
                console.log(`PASS: ${name} ${JSON.stringify(x)}`);
            } else {
                console.log(`FAIL: ${name} ${JSON.stringify(x)}`);
            }
        });

export const compareArrays = (xs, ys, ordered = true) => {
    if (xs.length !== ys.length) {
        return false;
    } else if (ordered) {
        return JSON.stringify(xs) === JSON.stringify(ys);
    } else {
        return JSON.stringify(xs.sort()) === JSON.stringify(ys.sort());
    }
}
