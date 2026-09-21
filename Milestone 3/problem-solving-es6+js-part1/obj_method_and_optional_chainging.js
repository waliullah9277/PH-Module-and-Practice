/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/

const expensiveProduct = (products) => {
    let keys = Object.keys(products);
    let mx = 0;
    let expensiveProductName = '';
    for(let key of keys){
        if(mx < products[key]){
            mx = products[key];
            expensiveProductName = key;
        }
    }    
    return expensiveProductName; 
}

// console.log(expensiveProduct({ pen: 20, book: 150, bag: 500 }));



/*
  Problem 2: Safe Nested Access
  Safely access deeply nested optional data using ?. and ?? without
  throwing errors.

  Example: user?.address?.city ?? "City not found" when address is undefined
*/

let user1 = {
    name: 'Waliullah',
    address: {
        city: "Dhaka"
    }
}

let user2 = {
    name: 'Rahim',
    address: null
}

const findCity = (user) => {
    return user.address?.city;  
}

console.log(findCity(user1));
console.log(findCity(user2));
