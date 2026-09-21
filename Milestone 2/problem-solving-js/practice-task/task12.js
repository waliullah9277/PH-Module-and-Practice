// Task 13-7B: Keep Only Even Numbers
// Problem Statement:
// Write a function keepEvenNumbers that takes an array of numbers and returns a new array with only the even numbers.
// Input
// [3, -5, 8, -1, 0]
// Output
// [8, 0]

function keepEvenNumbers(numbers) {
  let result = [];
  for(let num of numbers){
    if(num % 2 === 0){
        result.push(num);
    }
  } 
  return result;
}
 
console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]
