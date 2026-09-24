/* Problem 2
Problem statement: Declare a string | number union variable. Cast it safely to number and add 10. Then write a double assertion (as unknown as) example and comment why it's risky.
Input: let value: string | number = "100";
Output: 110 (safe cast result); commented risky example, no runtime output required. */

let value: string | number = '100';
let safe = Number(value);
let safeResult = safe + 10;
console.log(safeResult);

// risky to double as
let risky = value as unknown as boolean;
let riskyValue = Number(risky) + 10;
console.log(riskyValue);

