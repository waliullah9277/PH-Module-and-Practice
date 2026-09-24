"use strict";
/* Problem 4
Problem statement: Create a type alias PaymentMethod = "cash" | "card" | "mobile". Comment why interface can't express this. Create an Order interface using PaymentMethod.
Input: let method: PaymentMethod = "card";
Output: Order object like { id: 1, method: "card" }, type-checked successfully. */
Object.defineProperty(exports, "__esModule", { value: true });
let method = "card";
let order = {
    id: 1,
    method: method,
};
console.log(order);
//# sourceMappingURL=task4.js.map