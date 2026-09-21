// 1. Given an array of numbers, remove duplicates and log the unique values only.

const numbers = [1, 2, 3, 2, 4, 1, 5, 3];
const uniqueArray = [...new Set(numbers)]
console.log(uniqueArray);
