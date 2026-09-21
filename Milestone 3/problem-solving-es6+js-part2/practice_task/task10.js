/* 
Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style) 
Given an array of orders { product, unitsSold }, 
return the name of the product with the highest total units sold across all orders (a product may appear in multiple orders).

Input: [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }] 
Output: "Pen"

*/

const getTopSellingProduct = (orders) => {

    const products = [...new Set(
        orders.map(order => order.product)
    )];

    const productTotals = products.map(product => {

        const total = orders.reduce((sum, order) => {
            if (order.product === product) {
                return sum + order.unitsSold;
            }

            return sum;
        }, 0);

        return {
            product,
            total
        };
    });

    const topProduct = productTotals.reduce((best, current) => {
        return current.total > best.total ? current : best;
    });

    return topProduct.product;
};

const orders = [
    { product: "Pen", unitsSold: 30 },
    { product: "Bag", unitsSold: 12 },
    { product: "Pen", unitsSold: 25 }
];

console.log(getTopSellingProduct(orders));