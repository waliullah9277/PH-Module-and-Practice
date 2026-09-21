// Task 1.2 — Convert Between Them
// Convert the string "JavaScript" into an array of characters.
// Convert the array ["c", "a", "t"] back into a single string "cat".

let str = "JavaScript";
let arr = str.split("");
console.log(arr);
let newStr = arr.join("");
console.log(newStr);

let arr2 = ["c", "a", "t"];
let newStr2 = arr2.join("");
console.log(newStr2);