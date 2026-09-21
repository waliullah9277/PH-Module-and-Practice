/*
  Problem 1: Fix the Scope Bug
  Rewrite using let to fix the output.
*/

let status = "Order Placed";

for (let i = 1; i <= 3; i++) {
  let status = "Processing Item " + i;
//   console.log(status);
}

// console.log("Final Status:", status);

/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/

function receiptGenerator(items, price, qty){
    let total = price * qty;
    return `${items} x ${qty} = ${total} Taka`
    
}

console.log(receiptGenerator('Pen', 20, 3));
console.log(receiptGenerator('Erasser', 15, 3));
console.log(receiptGenerator('Note Book', 40, 3));
