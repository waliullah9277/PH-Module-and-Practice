// 13-10C: Remove Duplicate Values from an Array
// Problem Statement: Write a function removeDuplicates that takes an array of numbers and returns a new array where each value appears only once, keeping the first occurrence.
// Input
// [1, 2, 2, 3, 4, 4, 5]
// Output
// [1, 2, 3, 4, 5]

 
function removeDuplicates(numbers) {
  let unique = [];
  for(let num of numbers){
    if(!unique.includes(num)){
        unique.push(num);
    }
  } 
  return unique;
}
 
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]
