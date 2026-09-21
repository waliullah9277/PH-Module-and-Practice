// 13-10D: Invert an Object
// Problem Statement: Write a function invertObject that takes an object with unique values and returns a new object where each original value becomes a key, and each original key becomes its value.
// Input
// { a: 1, b: 2, c: 3 }
// Output
// { 1: "a", 2: "b", 3: "c" }

 
function invertObject(obj) {
  let inverted = {};
  for(let key in obj){
    inverted[obj[key]] = key;
  }
 
  return inverted;
}
 
console.log(invertObject({ a: 1, b: 2, c: 3 }));
// Expected: { 1: "a", 2: "b", 3: "c" }
