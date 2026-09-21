// Task 10:  cloneAndUpdate(arr, index, newValue) — Spread (Immutable Array 
// Update) Return a new array with the value at index replaced by newValue, without mutating the original array.
// Input:  cloneAndUpdate([5, 10, 15], 1, 99)
// Output: [5, 99, 15]
// (original array still [5, 10, 15])

const cloneAndUpdate = (arr, index, newValue) => {
    console.log(arr);
    let newArray = [...arr]
    newArray[index] = newValue;
    // console.log(newArray);
    return newArray;    
}

console.log(cloneAndUpdate([5, 10, 15], 1, 99));
