"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Problem 8
Problem statement: Create a string enum OrderStatus: Placed, Shipped, Delivered, Cancelled. Write a function that prints a readable message for a given status.
Input: OrderStatus.Shipped
Output: "Current status: SHIPPED" (or equivalent readable message) */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "PLACED";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function printOrderStatus(status) {
    console.log(`Current status: ${status}`);
}
printOrderStatus(OrderStatus.Shipped); // Output: "Current status: SHIPPED"
//# sourceMappingURL=task8.js.map