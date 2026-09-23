// 3. array থেকে even numbers filter করো।
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers: number[] = numbers.filter((number: number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);