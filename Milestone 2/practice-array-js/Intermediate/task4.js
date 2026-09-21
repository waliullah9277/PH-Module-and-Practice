// 4. Check two variables (one array, one not) and log whether each is an array.
// Expected: true then false, or false then true depending on order

const learn = ["I", "am", "learning", "JavaScript"];
const number = 5;
const checkArray = Array.isArray(learn)
const checkArrayNum = Array.isArray(number)
console.log(checkArray);
console.log(checkArrayNum);
