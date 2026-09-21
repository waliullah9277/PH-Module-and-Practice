// 13-10A: Perfect Square Checker
// Problem Statement: Write a function isPerfectSquare that takes a number and returns true if it is a perfect square, otherwise false.
// Input
// 16
// 20
// Output
// true
// false

function isPerfectSquare(num) {
    let result = Math.sqrt(num);  
    if(Number.isInteger(result)){
        return true;
    }else{
        return false;
    }
}
 
console.log(isPerfectSquare(16)); // Expected: true
console.log(isPerfectSquare(20)); // Expected: false

