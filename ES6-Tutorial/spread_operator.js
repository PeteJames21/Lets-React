/**
 * The spread operator can be used to combine or clone objects and arrays
 */

// Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Combine and add additional elements
const arr3 = [...arr1, 99, ...arr2, 99];
console.log(arr3);

// Combine two objects and add additional properties
const A = {'a': 1};
const B = {'b': 2};
const C = {...A, ...B, 'd': 4};
console.log(C);