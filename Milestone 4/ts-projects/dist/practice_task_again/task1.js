"use strict";
/* Problem 1
Problem statement: Declare a variable of type unknown holding a string. Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
Input: let val: unknown = "Hello TypeScript";
Output: 16 (length), printed twice — once via as string, once via <string>. */
Object.defineProperty(exports, "__esModule", { value: true });
let val = "Hello TypeScript";
// as string assert
let len1 = val.length;
console.log(len1);
// <string> 
let len2 = val.length;
console.log(len2);
//# sourceMappingURL=task1.js.map