// Task 13-6B: Count Multiples of Three
// Problem Statement:
// Write a function countMultiplesOfThree that takes an array of numbers and returns how many of them are divisible by 3.
// Input
// [3, 4, 6, 7, 9, 10]
// Output
// 3

function countMultiplesOfThree(numbers) {
  let count = 0;
  for(let num of numbers){
    if(num % 3 === 0){
        count++;
    }
  } 
  return count;
}
 
console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // Expected: 3

