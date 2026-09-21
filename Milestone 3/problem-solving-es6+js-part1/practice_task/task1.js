// Task 1: calculateBill(amount, taxRate = 0.05) — Default Parameters 
// Return the final bill after tax is applied. Default tax rate is 5% when not provided.
// Input:  
// calculateBill(1000)
// Output: 
// 1050
// Input:  
// calculateBill(1000, 0.10)
// Output: 
// 1100

const calculateBill = (amount, taxRate = 0.05) =>{
    // console.log(amount, taxRate);
    let taxAmount = amount * taxRate;
    let finalBill = amount + taxAmount;
    // console.log(taxAmount, finalBill);    
    return finalBill;
}

console.log(calculateBill(1000));
console.log(calculateBill(1000, 0.10));
