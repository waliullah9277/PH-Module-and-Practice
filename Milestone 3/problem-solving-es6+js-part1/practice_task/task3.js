// Task 3: getLowestPrice(prices) — Spread Operator 
// Given an array of numbers, return the lowest price using Math.min combined with spread (no manual loop).
// Input:  
// [340, 120, 560, 90]
// Output: 
// 90

const getLowestPrice = (prices) => {
    // console.log(Math.min(...prices));
    return Math.min(...prices)
}

console.log(getLowestPrice([340, 120, 560, 90]));
