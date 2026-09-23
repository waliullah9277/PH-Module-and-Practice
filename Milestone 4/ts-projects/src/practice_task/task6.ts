/* Problem 6
Problem statement: Create a generic interface Container<T> with item: T. Create one Container<number> and one Container<string>.
Input: { item: 100 }, { item: "Books" }
Output: Container<number> = { item: 100 }, Container<string> = { item: "Books" } */

interface Container<T> {
    item: T;
}

const numberContainer: Container<number> = { item: 100 };
const stringContainer: Container<string> = { item: "Books" };

console.log(numberContainer); // Output: { item: 100 }
console.log(stringContainer); // Output: { item: "Books" }