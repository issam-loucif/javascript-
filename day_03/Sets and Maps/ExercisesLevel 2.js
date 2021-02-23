//1
let a = new Set([1,2,3]);
let b = new Set([4,3,2]);
let union = new Set([...a, ...b]);
console.log(union)
//2
let c = new Set([1,2,3]);
let d = new Set([4,3,2]);
let intersection = new Set(
    [...c].filter(x => d.has(x)));
    console.log(intersection)
//3
let wit=new Set(union.add(c))
console.log(wit)
