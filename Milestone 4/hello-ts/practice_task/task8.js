"use strict";
/* 8. Problem Statement:
দুইটি array merge করো spread operator ব্যবহার করে।
Input:
[1, 2, 3]
[4, 5, 6]
Output:
[1, 2, 3, 4, 5, 6] */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const margedArray = [...arr1, ...arr2];
console.log(margedArray);
