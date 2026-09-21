// Task 13-3A: Product of Digits
// Problem Statement:
// Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits.
// Input
// 123
// 4040
// Output
// 6  (1 × 2 × 3)
// 0

function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  for(let n of str){
    total *= n;
  } 
  return total;
}
 
console.log(productOfDigits(123));  // Expected: 6
console.log(productOfDigits(4040)); // Expected: 0


