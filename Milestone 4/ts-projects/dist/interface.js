"use strict";
// interface User {
//     name: string;
//     age: number;
//     email: string;
//     phone?: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        id: 1,
        name: "Premium Panjabi",
        price: 1800,
        category: "Panjabi",
        inStock: true
    },
    {
        id: 2,
        name: "China Mesh Polo",
        price: 1200,
        category: "Polo",
        inStock: true
    },
    {
        id: 3,
        name: "Denim Pant",
        price: 1600,
        category: "Pant",
        inStock: false
    }
];
const showProduct = (product) => {
    console.log(`Product: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Category: ${product.category}`);
    console.log(`Available: ${product.inStock}`);
};
const first = products[0];
if (first) {
    showProduct(first);
}
// showProduct(products[0])
// if (product) {
//     showProduct(product);
// }
//# sourceMappingURL=interface.js.map