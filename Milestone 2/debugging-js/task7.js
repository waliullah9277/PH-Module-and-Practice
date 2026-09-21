// Task 14-7: Debug a Multi-Part Bug
// Problem Statement:
// This function should return an array of only the odd numbers from the input array. It currently has two separate bugs — fix them one at a time.
// Input
// [1, 2, 3, 4, 5, 6]
// Expected Output
// [1, 3, 5]


// Starter Snippet (buggy):
// This code has TWO bugs. Fix one, re-run, then find the next.
 
function getOddNumbers(numbers) {
  let odds = [];
 
  for (let i = 0; i < numbers.length; i++) { // bug #1 is here
    // console.log('i->>', i, 'value->>', numbers[i]);
    
    if (numbers[i] % 2 === 1) {                  // bug #2 is here
      odds.push(numbers[i]);
    }
  } 
  return odds;
}
 
console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]
