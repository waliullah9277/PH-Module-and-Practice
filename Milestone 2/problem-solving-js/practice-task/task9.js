// Task 13-6A: Find the Second Smallest Number
// Problem Statement:
// Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value.
// Input
// [10, 5, 8, 20, 15]
// Output
// 8

function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for(let num of numbers){
    if(num < smallest){
        smallest = secondSmallest;
        secondSmallest = num;
    }
    else if(num > smallest && secondSmallest > num){
        secondSmallest = num;
    }
  } 
  return secondSmallest;
}
 
console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
