function cashRegister(){
    let count = 0;
    return function(payableAmount){
        count += payableAmount
        return count;
    }
}

let resturantCashCounter = cashRegister()
let juiceBarCashCounter = cashRegister()
let foodCourtCashCounter = cashRegister()

console.log("Resturant Cash: ", resturantCashCounter(100));
console.log("Resturant Cash: ", resturantCashCounter(300));
console.log("Resturant Cash: ", resturantCashCounter(500));

console.log("JuiceBar Cash: ", juiceBarCashCounter(200));
console.log("JuiceBar Cash: ", juiceBarCashCounter(400));

console.log("Food Court Cash: ", foodCourtCashCounter(200));
console.log("Food Court Cash: ", foodCourtCashCounter(300));



