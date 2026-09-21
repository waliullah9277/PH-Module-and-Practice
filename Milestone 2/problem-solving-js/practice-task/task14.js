// Task 13-8B: Get a Value or a Default
// Problem Statement:
// Write a function getValueOrDefault that takes an object, a key name, and a default value, and returns the object's value for that key if it exists, otherwise the default value.
// Input
// person, key "age", default 0
// person, key "grade", default "N/A"
// Output
// 25
// "N/A"

function getValueOrDefault(obj, key, defaultValue) {
  if(obj.hasOwnProperty(key)){
    return obj[key];
  }else{
    return defaultValue;
  }
}
 
let person = { name: "Sam", age: 25 };
console.log(getValueOrDefault(person, "age", 0));        // Expected: 25
console.log(getValueOrDefault(person, "grade", "N/A"));  // Expected: "N/A"

