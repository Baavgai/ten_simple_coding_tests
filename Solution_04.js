const solution = s => 
    s.split('').findIndex((x, i, xs) => xs.indexOf(x, i + 1) ===-1);
    // s.split('').map((x, i, xs) => ([x, i, xs.indexOf(x, i + 1)]));


console.log(solution('alphabet'))
console.log(solution('barbados'))
console.log(solution('crunchy'))
// console.log(solution('xxxxx'))

// start from index 2
// console.log(beasts.indexOf('bison', 2));
// expected output: 4