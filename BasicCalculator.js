function add(A, B){
  return A + B;
};
console.assert(add(0, 0) === 0);
console.assert(add(0, 1) === 1);
console.assert(add(0, 2) === 2);
console.assert(add(0, 3) === 3);
console.assert(add(0, 4) === 4);
console.assert(add(0, 5) === 5);
console.assert(add(0, 6) === 6);
console.assert(add(0, 7) === 7);
console.assert(add(0, 8) === 8);
console.assert(add(0, 9) === 9);

console.assert(add(1, 0) === 1);
console.assert(add(1, 1) === 2);
console.assert(add(1, 2) === 3);
console.assert(add(1, 3) === 4);
console.assert(add(1, 4) === 5);
console.assert(add(1, 5) === 6);
console.assert(add(1, 6) === 7);
console.assert(add(1, 7) === 8);
console.assert(add(1, 8) === 9);
console.assert(add(1, 9) === 10);

console.assert(add(2, 0) === 2);
console.assert(add(2, 1) === 3);
console.assert(add(2, 2) === 4);
console.assert(add(2, 3) === 5);
console.assert(add(2, 4) === 6);
console.assert(add(2, 5) === 7);
console.assert(add(2, 6) === 8);
console.assert(add(2, 7) === 9);
console.assert(add(2, 8) === 10);
console.assert(add(2, 9) === 11);

/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
function minus(A, B){
  return A - B;
}
console.assert(minus(0, 0) === 0);
console.assert(minus(0, 1) === -1);
console.assert(minus(0, 2) === -2);
console.assert(minus(0, 3) === -3);
console.assert(minus(0, 4) === -4);
console.assert(minus(0, 5) === -5);
console.assert(minus(0, 6) === -6);
console.assert(minus(0, 7) === -7);
console.assert(minus(0, 8) === -8);
console.assert(minus(0, 9) === -9);

function times(A, B){
  return A * B;
}
console.assert(times(0, 0) === 0)
