// Task 13-7A: Average of All Numbers
// Problem Statement:
// Write a function averageOfArray that takes an array of numbers and returns their average.
// Input
// [2, 4, 6]
// Output
// 4


function averageOfArray(numbers) {
  let total = 0;
  for(let num of numbers){
    total += num;
  }
  total = total/numbers.length; 
  return total;
}

console.log(averageOfArray([2, 4, 6])); // Expected: 4
