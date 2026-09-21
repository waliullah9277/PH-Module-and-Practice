// 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both.

const mixArray = [10, "Hello", 20, "World", 30, "JavaScript"]
const numbers = [];
const nameArray = [];
for(const item of mixArray){
    if(typeof item == 'number'){
        numbers.push(item);
        // console.log(item);        
    }
    if(typeof item == 'string'){
        nameArray.push(item);
        // console.log(item);        
    }
}

console.log(numbers);
console.log(nameArray);

