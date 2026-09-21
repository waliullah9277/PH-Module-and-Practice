/* 
Task 7: sortByPriceAscending(products) — Callback Function 
Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().
Input: 
[{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 
Output:
 [{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 500 }]
  
*/

const sortByPriceAscending = (products) => {
    const products2 = [...products]
  const priceAscendingOrder = products2.sort((a, b) => {    
    return a.price - b.price;
    // return b.price - a.price;
  });
  return priceAscendingOrder;
};
const products = [
  { name: "Bag", price: 500 },
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 60 },
];

console.log(sortByPriceAscending(products));
