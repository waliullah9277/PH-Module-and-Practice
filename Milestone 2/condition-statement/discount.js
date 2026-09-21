// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

const cart = 1001;
const member = false;
if(cart > 1000 && member){
    const discount = 20;
    const discountAmount = cart/100*discount;
    const payableAmount = cart - discountAmount
    console.log('You can pay '+payableAmount +' Taka');
    
}
else if(cart > 1000 && !member){
    const discount = 10;
    const discountAmount = cart/100*discount;
    const payableAmount = cart - discountAmount
    console.log('You can pay '+payableAmount +' Taka');
    
}
else{
    const discount = 0;
    const discountAmount = cart/100*discount;
    const payableAmount = cart - discountAmount
    console.log('You can pay '+payableAmount +' Taka');
}