// find the max number 

function maxNumber(num1, num2){
    let mx = 0;
    if(num1 > num2){
        mx = num1;
    }
    else if(num2 > num1){
        mx = num2;
    }
    return mx;
}

const mxNum = maxNumber(34, 55);
console.log('The Maximum number is ', mxNum);
