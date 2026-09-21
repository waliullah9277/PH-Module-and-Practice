// Inventory Merge & Max Score

// Inventory Merge funciton
const mergeInventory = (arr1, arr2)=> {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid";
    }
    const merged = [...arr1, ...arr2];
    return merged;
}

// Max Score funciton
const highestScore = (scores)=> {
    if(!Array.isArray(scores)){
        return "Invalid";
    }
    const maxNumber = Math.max(...scores);
    return maxNumber;
}

console.log(mergeInventory([1,2],[3,4]));
console.log(mergeInventory("3,7,2"));
console.log(highestScore([3,7,2,9,4]));
console.log(highestScore("3,7,2"));
