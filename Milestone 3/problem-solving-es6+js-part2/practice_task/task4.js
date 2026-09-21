/* 
Task 4: getTotalStockValue(products) — reduce() 
Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
Input:
 [{ price: 50, stock: 4 }, { price: 20, stock: 10 }] 
Output: 400

*/

const getTotalStockValue = (products) => {
    // console.log(products);    
    const totalStockPrice = products.reduce((accumulator, currentValue) => accumulator += (currentValue.price * currentValue.stock) ,0)
    // console.log(totalStockPrice);    
    return totalStockPrice;
}

console.log(getTotalStockValue([{ price: 50, stock: 4 }, { price: 20, stock: 10 }]));
