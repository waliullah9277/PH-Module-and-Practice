// Bonus Challenge — Shopping Bill Calculator
// Calculate a subtotal, tax amount, and grand total, then print a neat bill.

// Expected Console Output
// ---- Shopping Bill ----
// Product: Wireless Mouse
// Price per unit: 15
// Quantity: 4
// Subtotal: 60
// Tax (5%): 3
// Grand Total: 63
// ------------------------

let productName = "Wireless Mouse";
let price = 15;
let quantity = 4;
let taxPercent = 5;

let subTotal = price * quantity;
let tax = (subTotal * taxPercent) / 100;
let grandTotal = subTotal + tax;

console.log("---- Shopping Bill ----");
console.log("Product: ", productName);
console.log("Price per unit: ", price);
console.log("Quantity: ", quantity);
console.log("Subtotal: ", subTotal);
// console.log(`Tax (${taxPercent}%): `, tax);
console.log("Tax (" + taxPercent + "%):", tax);
console.log("Grand Total: ", grandTotal);
console.log("------------------------");

