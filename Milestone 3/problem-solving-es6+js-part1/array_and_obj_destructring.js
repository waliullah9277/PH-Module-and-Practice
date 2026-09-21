/*
  Problem 1: Nested Response Extractor
  Extract specific fields from a nested API-like response object using
  destructuring, with renaming + default value.

  Example: { user: { name: "Rafi", age: 22 } } -> extract name as
  userName, default age = 18 if missing
*/

const responseExtactor = (obj) => {
    let {user: {name: userName, age = 18}} = obj;
    return {
        userName, 
        age,
    }    
}

// console.log(responseExtactor({ user: { name: "Rafi", age: 22 } }));
// console.log(responseExtactor({ user: { name: "Waliullah", age: 26 } }));
// console.log(responseExtactor({ user: { name: "Rahim" } }));


/*
  Problem 2: Swap & Rest Extractor
  Swap two variables and extract first/rest elements from an array
  using destructuring, no temp variable.

  Example: [a, b] = [b, a]
  Example: [first, ...rest] = [10,20,30,40] -> first=10, rest=[20,30,40]
*/

// swap two value 

let a = 5;
let b = 10;
// console.log(`Before Swaping: a-> value is ${a} and b-> value is ${b}`);
[b, a] = [a, b]
// console.log(`After Swaping: a-> value is ${a} and b-> value is ${b}`);

// spread operation and rest
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let [first, second, ...rest] = numbers;
console.log(first, second, rest);

