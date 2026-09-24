"use strict";
/* Problem 3
Problem statement: Create a Product interface with title: string, price: number, inStock?: boolean. Create two product objects — one with inStock, one without. Write a function that logs a product's price.
Input: { title: "Laptop", price: 55000 } and { title: "Mouse", price: 500, inStock: true }
Output: 55000 and 500 printed by the function. */
Object.defineProperty(exports, "__esModule", { value: true });
const laptop = {
    title: "Laptop",
    price: 55000,
};
const mouse = {
    title: "Mouse",
    price: 500,
    inStock: true,
};
function productDetails(product) {
    console.log(product.price);
}
productDetails(laptop);
productDetails(mouse);
//# sourceMappingURL=task3.js.map