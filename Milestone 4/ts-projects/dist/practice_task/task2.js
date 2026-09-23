"use strict";
/* Problem 2
Problem statement: Declare a string | number union variable. Cast it safely to number and add 10. Then write a double assertion (as unknown as) example and comment why it's risky.
Input: let value: string | number = "100";
Output: 110 (safe cast result); commented risky example, no runtime output required. */
Object.defineProperty(exports, "__esModule", { value: true });
let value = '100';
let safeNumber = typeof value === "number" ? value : value;
let result = parseFloat(safeNumber) + 10;
console.log(result);
// Risky double assertion (uncomment to see the warning)
// let riskyNumber: number = (value as unknown as number) + 10;
// console.log(riskyNumber); // Output: 110 (but with a type safety warning)
//# sourceMappingURL=task2.js.map