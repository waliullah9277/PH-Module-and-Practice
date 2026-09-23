// 1. একটি shopping cart object বানাও।
const shoppingCart: {
    product: string;
    price: number;
    quantity: number;
} = {
    product: "T-Shirt",
    price: 800,
    quantity: 2
};

console.log(shoppingCart);
console.log("Product:", shoppingCart.product);
console.log("Total Price:", shoppingCart.price * shoppingCart.quantity);