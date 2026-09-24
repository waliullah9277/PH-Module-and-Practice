/* Problem 3
Problem statement: Create a Product interface with title: string, price: number, inStock?: boolean. Create two product objects — one with inStock, one without. Write a function that logs a product's price.
Input: { title: "Laptop", price: 55000 } and { title: "Mouse", price: 500, inStock: true }
Output: 55000 and 500 printed by the function. */

interface Product {
    title: string,
    price: number,
    inStock?: boolean,
}

const laptop : Product = {
    title: "Laptop",
    price: 55000,
}

const mouse : Product = {
    title: "Mouse",
    price: 500,
    inStock: true,
}

function productDetails(product: Product): void {
    console.log(product.price);    
}

productDetails(laptop);
productDetails(mouse);