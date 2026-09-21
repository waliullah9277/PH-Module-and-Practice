// calculate discount

function calculateDiscount(price, discount){
    const discountPrice = price * discount / 100;
    const finalPrice = price - discountPrice;
    return finalPrice;
}

const result = calculateDiscount(1000, 20);
console.log("The final price is ", result);
