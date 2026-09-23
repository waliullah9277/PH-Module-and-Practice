/* 1. Problem Statement:
একটি function বানাও যা একটি user-এর নাম আর বয়স নিয়ে sentence print করবে।
Input:
printUser("Amina", 22)
Output:
Amina is 22 years old. */

function printUser(name: string, age: number): string{
    return `${name} is ${age} years old.`
}

console.log(printUser("Amina", 22));
