// 5. type-safe function দিয়ে total price calculate করো।
type Product = {
    name: string;
    price: number;
    quantity: number;
};

const products: Product[] = [
    {
        name: "T-Shirt",
        price: 800,
        quantity: 2
    },
    {
        name: "Pant",
        price: 1200,
        quantity: 1
    },
    {
        name: "Shoes",
        price: 2500,
        quantity: 1
    }
];

const calculateTotalPrice = (products: Product[]): number => {

    return products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
};

console.log("Total Price:", calculateTotalPrice(products));