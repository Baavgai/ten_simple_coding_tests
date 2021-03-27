from https://towardsdatascience.com/10-algorithms-to-solve-before-your-python-coding-interview-feb74fb9bc27


## 5. Valid Palindrome

s = 'radkar'

## 6. Monotonic Array


```
A = [6,5,4,4]
B = [1,1,1,3,3,4,3,2,4,2]
C = [1,1,2,3,7]

assert solution(A)
assert not solution(B)
assert solution(C)
```

## 7. Move Zeroes


```python
array1 = [0,1,0,3,12]
array2 = [1,7,0,0,8,0,10,12,0,4]

assert solution(array1) == [1, 3, 12, 0, 0]
assert solution(array2) == [1, 7, 8, 10, 12, 4, 0, 0, 0, 0]
```

## 8 Fill The Blanks


```python
array1 = [1, None, 2, 3, None, None, 5, None]

assert solution(array1) == [1, 1, 2, 3, 3, 3, 5, 5]
```


## 9. Matched & Mismatched Words


```python
sentence1 = 'We are really pleased to meet you in our city'
sentence2 = 'The city was hit by a really heavy storm'

assert solution(sentence1, sentence2) == ({'We', 'to', 'heavy', 'The', 'storm', 'meet', 'hit', \
    'pleased', 'are', 'by', 'a', 'in', 'was', 'you', 'our'}, {'really', 'city'})
```


## 10. Prime Numbers Array

Given `k` numbers which are less than `n`, return the set of prime number among them

Note: The task is to write a program to print all Prime numbers in an Interval.

Definition: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

```python
assert solution(35) == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
```
