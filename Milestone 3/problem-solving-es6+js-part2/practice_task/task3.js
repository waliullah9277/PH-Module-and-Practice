/* 
Task 3: findProductByName(products, name) — find() 
Given an array of product objects, return the first product matching the given name, or undefined if not found.
Input: 
products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag" 
Output: 
{ name: "Bag", price: 500 }
 
*/

const findProductByName = (products, name) => {
//   console.log(products, name);
    const productName = products.find((product, ind, arr) => product.name === name)
    // console.log(productName);
    return productName;    
};

const products = [
    { name: "Pen", price: 10 },
    { name: "Bag", price: 500 },
  ]

console.log(findProductByName(products, 'Bag'));
console.log(findProductByName(products));
