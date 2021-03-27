# 10 Algorithms To Solve Before your Coding Interview

Forked from https://github.com/gambuzzi/ten_simple_coding_tests

To solve with javascript.

## Helpers

To do some tests in javascript, we'll need to compare array results.  In some cases, we want to just make sure all elements in an array are present, regardless of order.  Rather than using `console.assert`, test examples will use the following helper code.

```javascript
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
```


## 1. Reverse Integer
Given an integer, return the integer with reversed digits.

Note: The integer could be either positive or negative.

```javascript
const tester = createTester("reverse int", solution);
export const tests = [
    tester(-231, -132),
    tester(345, 543)
];
```

<details>
	<summary>Solution</summary>

```javascript
const solution = n =>
    (n < 0 ? -1 : 1) * Number.parseInt(`${Math.abs(n)}`.split('').reduce((acc, x) => `${x}${acc}`));
```

</details>

## 2. Average Words Length

For a given sentence, return the average word length.

Note: Remember to remove punctuation first.

```javascript
const tester = createTester("avg word len", solution);
export const tests = [
    tester("Hi all, my name is Tom...I am originally from Australia.", 3.82),
    tester("I need to work very hard to learn more about algorithms in JavaScript!", 4.38)
];
```

<details>
	<summary>Solution</summary>

```javascript
const solution = msg => {
    const [ct,tot] = msg.split(/\W/)
        .map(x => x.trim().length)
        .filter(x => x > 0)
        .reduce(([ct,tot], n) => ([ct + 1, tot + n]), [0,0]);
    return Math.round(((tot / ct) + Number.EPSILON) * 100) / 100;
};
```

</details>

## 3. Add Strings
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

You must **not** use any built-in BigInteger library or convert the inputs to integer directly.

```javascript
const tester = createTester("add strings", solution);
export const tests = [
    tester(['364','1836'],'2200'),
    tester(['9','99'], '108'),
    tester(['1','9999999999999999999999999999999999999999999'], '10000000000000000000000000000000000000000000'),
];
```

<details>
	<summary>Solution</summary>

```javascript
const solution = (a, b) => {
    if (b.length>a.length) {
        return solution(b,a);
    } else {
        const br = b.split('').reverse();
        const [xs, carry] = a.split('')
            .reverse()
            .map((x, i) => Number.parseInt(x) + (i<b.length ? Number.parseInt(br[i]) : 0))
            .reduce(([xs, carry], n) => { 
                const x = n + carry;
                return x > 9 ? [[...xs, x - 10], 1] : [[...xs, x], 0];
            }, [[], 0]);
        return (carry === 0 ? xs : [...xs, carry]).reduce((acc, x) => `${x}${acc}`);
    }
};
```

</details>

## 4. First Unique Character
Given a string, find the first non-repeating character in it and return its index.

If it doesn't exist, return -1.

*`Note: all the input strings are already lowercase.`*

```javascript
const tester = createTester("first unique char", solution);
export const tests = [
    tester('alphabet', 1),
    tester('barbados', 2),
    tester('crunchy', 1),
    tester('xxxxx', -1),
];
```

<details><summary>Solution</summary>

```javascript
const solution = s => {
    const m = s.split('').reduce((m, c, idx) => {
        if (c in m) { m[c].ct += 1; } else { m[c] = { idx, ct: 1 }; }
        return m;
    }, {});
    const found = Object.keys(m).filter(k => m[k].ct === 1).map(k => m[k].idx);
    return found.length === 0 ? -1 : Math.min(...found);
};
```

</details>

## 5. Valid Palindrome

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

The string will only contain lowercase characters a-z.

```javascript
const tester = createTester("palindrome", solution);
export const tests = [
    tester('radkar', true),
    tester('alice', false),
    tester('bob', true),
];
```

<details>
	<summary>Solution</summary>

```javascript
const solution = word => {
    for(let h = 0, t = word.length - 1; h<t -1; h++, t--) {
        if (word[h]!==word[t]) { return false; }
    }
    return true;
};
```

</details>

## 6. Monotonic Array

Given an array of integers, determine whether the array is monotonic or not.

```javascript
const tester = createTester("monotonic arr", solution);
export const tests = [
    tester([[6, 5, 4, 4]], true),
    tester([[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], false),
    tester([[1, 1, 2, 3, 7]], true),
];
```

<details>
	<summary>Solution</summary>

```javascript
const solution = xs => 
    xs.every((x,i) => i==0 || xs[i-1] <= x)
    || xs.every((x,i) => i==0 || xs[i-1] >= x);
```

</details>

## 7. Move Zeroes

Given an array nums, write a function to move all zeroes to the end of it while maintaining the relative order of the non-zero elements.

```javascript
const tester = createTester("move zeros", solution, compareArrays);
export const tests = [
    tester([[0, 1, 0, 3, 12]], [1, 3, 12, 0, 0]),
    tester([[1, 7, 0, 0, 8, 0, 10, 12, 0, 4]], [1, 7, 8, 10, 12, 4, 0, 0, 0, 0]),
];
```

<details>
	<summary>Solution</summary>

```javascript
const solution = xs => {
    const [acc, zs] = xs.reduce(([acc, zs], x) => x === 0 ? [acc, [...zs, x]] : [[...acc, x], zs], [[], []]);
    return [...acc, ...zs];
};
```

</details>

## 8 Fill The Blanks

Given an array containing `undefined` values fill in the `undefined` values with most recent `!undefined` value in the array

```javascript
const tester = createTester("fill blanks", solution, compareArrays);
export const tests = [
    tester([[1, undefined, 2, 3, undefined, undefined, 5, undefined]], [1, 1, 2, 3, 3, 3, 5, 5])
];
```

<details>
	<summary>Solution</summary>

```javascript
const solution = xs =>
    xs.reduce((acc, x, i) => i === 0 ? [x] : [...acc, (x === undefined ? acc[i-1] : x) ], []);
```

</details>


## 9. Matched & Mismatched Words

Given two sentences, return an array that has the words that appear in one sentence and not the other and an array with the words in common.

```javascript
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
```

<details>
	<summary>Solution</summary>

```javascript
const solution = (sentence1, sentence2) => {
    let m = {};
    sentence1.split(' ').forEach(x => m[x] = 1);
    sentence2.split(' ').forEach(x => { if (x in m) { m[x] |= 2; } else { m[x] = 2; } });
    return Object.keys(m).reduce(([xs, ys], k) => m[k] === 3 ? [xs, [...ys, k]] : [[...xs, k], ys], [[], []])
}
```
</details>

## 10. Prime Numbers Array

Given `k` numbers which are less than `n`, return the set of prime number among them

Note: The task is to write a program to print all Prime numbers in an Interval.

Definition: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

```javascript
const tester = createTester("primes", solution, compareArrays);
export const tests = [
    tester(35, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31])
];
``````

<details>
	<summary>Solution</summary>

```javascript
const solution = n => {
    const sieve = new Array(n + 1).fill(0);
    const markOff = v => {
        if (sieve[v] === 0) {
            for(let i=v + v; i < n + 1; i += v) {
                sieve[i] = 1;
            }
        }
    };
    for(let i=2; i<n + 1; i++) {
        markOff(i);     
    }
    return sieve.map((x,i) => i < 2 ? undefined : (x === 0 ? i : undefined)).filter(x => x !== undefined);
}
```
</details>
