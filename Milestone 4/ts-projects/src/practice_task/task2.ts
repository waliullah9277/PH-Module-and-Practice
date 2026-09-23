/* Problem 2
Problem statement: Declare a string | number union variable. Cast it safely to number and add 10. Then write a double assertion (as unknown as) example and comment why it's risky.
Input: let value: string | number = "100";
Output: 110 (safe cast result); commented risky example, no runtime output required. */

let value: string | number = '100'
let safeNumber: string = typeof value === "number" ? value : (value as string);
let result : number = parseFloat(safeNumber) + 10;
console.log(result);


// Risky double assertion (uncomment to see the warning)
// let riskyNumber: number = (value as unknown as number) + 10;
// console.log(riskyNumber); // Output: 110 (but with a type safety warning)