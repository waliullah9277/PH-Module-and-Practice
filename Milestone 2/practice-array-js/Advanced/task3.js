// 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).

const numbers = [12, 1, 3, 20, 4, 10, 15, 130];
let mx = numbers[0];
let mn = numbers[0];
for(const item of numbers){
    if(item > mx){
        mx = item;
    }
    if(item < mn){
        mn = item;
    }
}

console.log("Maximum value is: ", mx);
console.log("Minimum value is: ", mn);
