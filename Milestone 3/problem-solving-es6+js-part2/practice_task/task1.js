// Module 19 — Practice Tasks

// Task 1: getFormattedPrices(prices) — map() 
// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
// Input: [100, 250, 75] 
// Output: ["$100", "$250", "$75"]

const getFormattedPrices = (prices) => {
    // console.log(prices);    
    const formatedPrice = prices.map((price) =>{
        // console.log(`$${price}`);
        return `$${price}`;     
    })
    return formatedPrice;
}

const prices = [100, 250, 75]
console.log(getFormattedPrices(prices));
