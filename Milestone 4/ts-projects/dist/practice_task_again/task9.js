"use strict";
/* Problem 9
Problem statement: Create an appConfig object (theme, version), lock it with as const. Try mutating a property and comment on the resulting error. Derive a union type from an array using typeof + as const.
Input: const appConfig = { theme: "dark", version: 2 } as const;
Output: commented error on mutation attempt (Cannot assign to 'theme' because it is a read-only property); derived union type example (e.g. "red" | "green" | "blue"). */
Object.defineProperty(exports, "__esModule", { value: true });
const appConfig = {
    theme: "dark",
    version: 2,
}; // no property changed because we use as const, and as const is readonly property
const colors = ["red", "green", "blue"];
let c1 = 'red';
// let c2: Color = 'pink'; // because of no pink value as const
console.log(c1);
//# sourceMappingURL=task9.js.map