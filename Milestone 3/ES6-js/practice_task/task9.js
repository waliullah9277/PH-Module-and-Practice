// ES5 — refactor this fully to ES6:
// var calculateTotal = function(items) {
//   var total = 0;
//   for (var i = 0; i < items.length; i++) {
//     total = total + items[i].price;
//   }
//   return 'Total: ' + total + ' Taka';
// };

// ES5 — refactor this fully to ES6:
// const calculateTotal = (items) => {
//   let total = 0;
//   let products = [...items];
//   for(let product of products){
//     total += product.price;
//   }
//   return `Total: ${total} Taka`;
// };

// console.log(calculateTotal([{price:100},{price:250}]));
// console.log(calculateTotal([{price:80}]));

const calculateTotal = (items) => {
  const total = items.reduce((sum, item) =>{
    return sum += item.price;
  }, 0)
  
  return `Total: ${total} Taka`;
};

console.log(calculateTotal([{price:100},{price:250}]));
console.log(calculateTotal([{price:80}]));


// var সব দুর করে let / const দিয়ে বদলানো
// String Concatenation ('+') দুর করে Template Literal (`...`) দিয়ে বদলানো
// Regular Function → Arrow Function তে Refactor করো
// for-loop এর Total Sum একটি Array.reduce() অথবা Spread দিয়ে লিখো


