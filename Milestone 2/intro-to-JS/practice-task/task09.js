// Task 9 — Mini Coding Challenge
// Calculate the total price, discount amount, and final price for a purchase.

// Expected Console Output
// Total Price: 600
// Discount Amount: 60
// Final Price: 540


let price = 200;
let quantity = 3;
let discount = 10; // percent

let totalPrice = price * quantity;
let discountPrice = (totalPrice * discount) / 100;
let finalPurchasePrice = totalPrice - discountPrice;

console.log("Total Price: ", totalPrice);
console.log("Discount Amount: ", discountPrice);
console.log("Final Price: ", finalPurchasePrice);
