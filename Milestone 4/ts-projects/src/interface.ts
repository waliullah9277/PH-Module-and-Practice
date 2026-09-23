// interface User {
//     name: string;
//     age: number;
//     email: string;
//     phone?: number;
// }


// const user1: User = {
//     name: "Waliullah",
//     age: 25,
//     email: "waliullah@gmail.com"
// };

// const user2: User = {
//     name: "Rahim",
//     age: 22,
//     email: "rahim@gmail.com"
// };

// const user3: User = {
//     name: "Karim",
//     age: 28,
//     email: "karim@gmail.com"
// };


interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}


interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

const products: Product[] = [
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

const showProduct = (product: Product): void => {
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