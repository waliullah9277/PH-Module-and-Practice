// 8. Given an array of numbers, log only the values greater than 10, using a loop.

const numbers = [1, 33, 15, 16, 27, 10, 7, 22, 6];
for(const item of numbers){
    if(item > 10){
        console.log(item);        
    }
}