// 0
// "Out of Stock"
// 1–5
// "Almost Sold Out"
// 6–20
// "Available"
// More than 20
// "In Stock"



const getStockStatus = (stock: number): string => {
    if(stock === 0){
        return "Out of Stock"
    } else if(stock > 0 && stock <= 5){
        return "Almost Sold Out"
    }else if(stock > 5 && stock <= 20){
        return "Available"
    }
    return "In Stock";
}

console.log(getStockStatus(0));
console.log(getStockStatus(3));
console.log(getStockStatus(12));
console.log(getStockStatus(50));
