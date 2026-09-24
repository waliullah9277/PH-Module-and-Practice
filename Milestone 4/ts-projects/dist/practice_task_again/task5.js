"use strict";
/* Problem 5
Problem statement: Write a generic function getLastElement<T> that returns the last element of an array. Test with number[] and string[].
Input: [10, 20, 30] and ["a", "b", "c"]
Output: 30 and "c" */
Object.defineProperty(exports, "__esModule", { value: true });
function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log(getLastElement([10, 20, 30]));
console.log(getLastElement(["a", "b", "c"]));
//# sourceMappingURL=task5.js.map