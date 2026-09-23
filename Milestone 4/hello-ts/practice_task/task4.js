"use strict";
/* 4. Problem Statement:
একটি tuple বানাও যেখানে একজন মানুষের নাম আর বয়স থাকবে।
Input:
["Amina", 22]
Output:
Amina is 22 years old. */
function profile(name, age) {
    return `${name} is ${age} years old.`;
}
const info = ["Amina", 22];
console.log(profile(...info));
