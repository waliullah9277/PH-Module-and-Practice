// 5. Rotate an array left by one position (first item moves to the end). Log the result.
// Expected: [2,3,4,5,1] from [1,2,3,4,5]

const numbers = [1, 2, 3, 4, 5];
const first = numbers[0];
for (let i = 0; i < numbers.length - 1; i++) {
    numbers[i] = numbers[i + 1];
}

numbers[numbers.length - 1] = first;
console.log(numbers);