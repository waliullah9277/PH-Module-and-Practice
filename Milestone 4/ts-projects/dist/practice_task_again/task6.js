"use strict";
/* Problem 6
Problem statement: Create a generic interface Container<T> with item: T. Create one Container<number> and one Container<string>.
Input: { item: 100 }, { item: "Books" }
Output: Container<number> = { item: 100 }, Container<string> = { item: "Books" } */
Object.defineProperty(exports, "__esModule", { value: true });
const numContainer = { item: 100 };
const strContainer = { item: "Books" };
console.log("Container<number> = ", numContainer);
console.log("Container<string> = ", strContainer);
//# sourceMappingURL=task6.js.map