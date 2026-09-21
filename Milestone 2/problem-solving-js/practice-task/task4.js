// Task 13-3B: Odd Numbers Up To N
// Problem Statement:
// Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).
// Input
// 10
// Output
// [1, 3, 5, 7, 9]


function getOddNumbers(n) {
  let odds = [];
  for(let i=1; i<=n; i++){
    if(i % 2 === 1){
        odds.push(i);  
    }
  } 
  return odds;
}
 
console.log(getOddNumbers(10)); // Expected: [1, 3, 5, 7, 9]
