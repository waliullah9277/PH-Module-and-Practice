"use strict";
/* Problem 2
Problem statement: Declare a string | number union variable. Cast it safely to number and add 10. Then write a double assertion (as unknown as) example and comment why it's risky.
Input: let value: string | number = "100";
Output: 110 (safe cast result); commented risky example, no runtime output required. */
Object.defineProperty(exports, "__esModule", { value: true });
let value = '100';
let safe = Number(value);
let safeResult = safe + 10;
console.log(safeResult);
// risky to double as
let risky = value;
let riskyValue = Number(risky) + 10;
console.log(riskyValue);
//# sourceMappingURL=task2.js.map