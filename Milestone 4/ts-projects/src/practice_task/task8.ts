/* Problem 8
Problem statement: Create a string enum OrderStatus: Placed, Shipped, Delivered, Cancelled. Write a function that prints a readable message for a given status.
Input: OrderStatus.Shipped
Output: "Current status: SHIPPED" (or equivalent readable message) */
enum OrderStatus {
    Placed = "PLACED",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

function printOrderStatus(status: OrderStatus) {
    console.log(`Current status: ${status}`);
}

printOrderStatus(OrderStatus.Shipped); // Output: "Current status: SHIPPED"
