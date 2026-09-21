/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.

function calculateTotal(discount, ...prices){
    // console.log(discount, prices);
    const total = prices.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue
    }, 0)
    let discountAmount = (total * discount) / 100;
    // console.log(discountAmount);    
    return (total - discountAmount )   
}

// console.log(calculateTotal(10, 100, 200, 300, 50));



// console.log(calculateTotal(10, 100, 200, 50, 300));

/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/

let arr1 = [10, 20, 30, 40, 50]
let arr2 = [20, 50, 60, 70, 80]

let margedArray = [...arr1, ...arr2]
console.log(margedArray);
// let newArray = [...new Set(margedArray)]
let newArray = Array.from(new Set(margedArray))
console.log(newArray);


