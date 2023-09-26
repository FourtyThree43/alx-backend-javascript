import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello') === 'a,b,c,d,H,e,l,l,o');
console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello') === ['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o']);
