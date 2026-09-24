/* Problem 4
Problem statement: Create a type alias PaymentMethod = "cash" | "card" | "mobile". Comment why interface can't express this. Create an Order interface using PaymentMethod.
Input: let method: PaymentMethod = "card";
Output: Order object like { id: 1, method: "card" }, type-checked successfully. */

type PaymentMethod = "cash" | "card" | "mobile";

interface Order{
    id: number,
    method: PaymentMethod,
}

let method: PaymentMethod = "card";
let order: Order = {
    id: 1,
    method: method,
}

console.log(order);
