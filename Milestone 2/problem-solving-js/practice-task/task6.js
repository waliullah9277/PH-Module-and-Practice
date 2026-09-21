// Task 13-4B: Remove First and Last Character
// Problem Statement:
// Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.
// Input
// "hello"
// Output
// "ell"

function removeFirstAndLast(str) {
    let finalStr = str.slice(1,str.length-1);
    return finalStr;     
}
 
console.log(removeFirstAndLast("hello")); // Expected: "ell"

