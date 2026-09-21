// Task 13-2B: Reverse a Number
// Problem Statement:
// Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)
// Input
// 1234
// 7
// Output
// 4321
// 7

function reverseNumber(num) {
  let str = num.toString();
  let reverseNum = str.split('').reverse().join('');
  let convertNum = parseInt(reverseNum);  
  return convertNum; 
}
 
console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7

