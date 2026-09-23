"use strict";
/* 3. Problem Statement:
একটি array বানাও যেখানে student-এর নাম থাকবে এবং কতজন আছে সেটা কনসোল করবে।
Input:
["Amina", "Rahim", "Karim", "Salma", "Rafi"]
Output:
Total student: 5 */
const studentName = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];
let count = 0;
for (let student of studentName) {
    count++;
}
console.log(count);
