// Task 13-8A: List an Object's Keys
// Problem Statement:
// Write a function listKeys that takes an object and returns an array containing its property names (keys).
// Input
// { name: "Sam", age: 25, city: "Dhaka" }
// Output
// ["name", "age", "city"]

function listKeys(obj) {
  let keys = [];
  for(let key in obj){
    keys.push(key);    
  }
  return keys;
}
 
console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
// Expected: ["name", "age", "city"]
