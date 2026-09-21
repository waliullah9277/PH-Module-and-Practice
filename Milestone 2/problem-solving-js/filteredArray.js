
// without function
// let arr = [10, 20, 30, 50, 40, 60, 80, 100];
// let value = 39;
// let filterArray = [];
// for(let i=0; i<arr.length; i++){
//     let currValue = arr[i];
//     console.log(currValue);    
//     if(currValue > value){
//         filterArray.push(currValue);
//     }
// }
// console.log(filterArray);

// with function
function filterArray(arr, val){    
    let filteredArray = [];
    for(let i = 0; i < arr.length; i++){     
        if(arr[i] > val){
            filteredArray.push(arr[i]);
        }
    }    
    return filteredArray;
}

const filterArr = filterArray([10, 20, 30, 50, 40, 60, 80, 100], 38);
console.log('Filter Array is: ', filterArr);
