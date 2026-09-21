// let arr = [10, 20, 14, 31, 33, 13, 6, 8, 120]; // 178

// let evenNumberArr = [];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenNumberArr.push(arr[i]);
//     sum += arr[i];
//   }
// }

// console.log(evenNumberArr);
// console.log(sum);

// convert function

function evenNumberSum(arr) {
  let evenNumberArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumberArr.push(arr[i]);
      sum += arr[i];
    }
  }
  return {
        evenNumbers: evenNumberArr,
        totalSum: sum
    };
}

let arr = [10, 20, 14, 31, 33, 13, 6, 8, 120];
const result = evenNumberSum(arr);
console.log('Even Array List: ', result.evenNumbers);
console.log('Sum of Even Array: ', result.totalSum);
