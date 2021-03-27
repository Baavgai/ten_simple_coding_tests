const solution = xs => 
    xs.every((x,i) => i==0 || xs[i-1] <= x)
    || xs.every((x,i) => i==0 || xs[i-1] >= x);

console.assert(solution([6,5,4,4]));
console.assert(!solution([1,1,1,3,3,4,3,2,4,2]));
console.assert(solution([1,1,2,3,7]));
