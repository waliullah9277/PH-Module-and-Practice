// 14-9B: Array Sum Skips a Number
// Problem Statement: Should return the sum of all numbers in the array.
// Input
// [1, 2, 3, 4]
// Expected Output
// 10


// Buggy Code:
function sumArray(numbers) {
  let total = 0;
 
  for (let i = 0; i < numbers.length; i++) { // find the bug
    console.log(i, numbers[i]);
    
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4])); // Expected: 10
