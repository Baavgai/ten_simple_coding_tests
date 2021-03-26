# 10 Algorithms To Solve Before your Coding Interview

Forked from https://github.com/gambuzzi/ten_simple_coding_tests

To solve with javascript.

## 1. Reverse Integer
Given an integer, return the integer with reversed digits.

Note: The integer could be either positive or negative.

* `-231` => `-132`
* `345` => `543`

```javascript
console.assert(solution(-231) === -132);
console.assert(solution(345) === 543);
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
const sentence1 = "Hi all, my name is Tom...I am originally from Australia.";
const sentence2 = "I need to work very hard to learn more about algorithms in Python!";

console.assert(solution(sentence1) == 3.82);
console.assert(solution(sentence2) == 4.08);
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
console.assert(solution('364','1836') === '2200');
console.assert(solution('9','99') === '108');
console.assert(solution('1', '9999999999999999999999999999999999999999999') === '10000000000000000000000000000000000000000000');
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
[['alphabet',1], ['barbados',2], ['crunchy',1],['xxxxx',-1] ].forEach(([word, answer]) => {
    console.assert(solution(word) === answer, word, answer);
});

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

<details>
	<summary>Solution</summary>

```javascript
```

</details>

## 6. Monotonic Array

Given an array of integers, determine whether the array is monotonic or not.

```python
A = [6,5,4,4]
B = [1,1,1,3,3,4,3,2,4,2]
C = [1,1,2,3,7]

assert solution(A)
assert not solution(B)
assert solution(C)
```

<details>
	<summary>Solution</summary>

```javascript
```

</details>

## 7. Move Zeroes

Given an array nums, write a function to move all zeroes to the end of it while maintaining the relative order of the non-zero elements.

```python
array1 = [0,1,0,3,12]
array2 = [1,7,0,0,8,0,10,12,0,4]

assert solution(array1) == [1, 3, 12, 0, 0]
assert solution(array2) == [1, 7, 8, 10, 12, 4, 0, 0, 0, 0]
```

<details>
	<summary>Solution</summary>

```javascript
```

</details>

## 8 Fill The Blanks

Given an array containing `None` values fill in the `None` values with most recent `non-None` value in the array

```python
array1 = [1, None, 2, 3, None, None, 5, None]

assert solution(array1) == [1, 1, 2, 3, 3, 3, 5, 5]
```

<details>
	<summary>Solution</summary>

```javascript
```

</details>


## 9. Matched & Mismatched Words

Given two sentences, return an array that has the words that appear in one sentence and not the other and an array with the words in common.

```python
sentence1 = 'We are really pleased to meet you in our city'
sentence2 = 'The city was hit by a really heavy storm'

assert solution(sentence1, sentence2) == ({'We', 'to', 'heavy', 'The', 'storm', 'meet', 'hit', \
    'pleased', 'are', 'by', 'a', 'in', 'was', 'you', 'our'}, {'really', 'city'})
```

<details>
	<summary>Solution</summary>

```javascript
```
</details>

## 10. Prime Numbers Array

Given `k` numbers which are less than `n`, return the set of prime number among them

Note: The task is to write a program to print all Prime numbers in an Interval.

Definition: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

```python
assert solution(35) == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
```

<details>
	<summary>Solution</summary>

```javascript
```
</details>
