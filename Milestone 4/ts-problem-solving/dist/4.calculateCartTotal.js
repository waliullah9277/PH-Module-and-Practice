"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (products) => {
    const totalProductPrice = products.reduce((sum, item) => sum + item.price, 0);
    return totalProductPrice;
};
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
console.log(calculateCartTotal(products));
console.log(calculateCartTotal(products2));
//# sourceMappingURL=4.calculateCartTotal.js.map