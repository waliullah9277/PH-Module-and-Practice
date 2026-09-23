"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Problem 5
Problem statement: Write a generic function getLastElement<T> that returns the last element of an array. Test with number[] and string[].
Input: [10, 20, 30] and ["a", "b", "c"]
Output: 30 and "c" */
function getLastElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[arr.length - 1];
}
const numbers = [10, 20, 30];
const strings = ["a", "b", "c"];
console.log(getLastElement(numbers)); // Output: 30
console.log(getLastElement(strings)); // Output: "c"
//# sourceMappingURL=task5.js.map