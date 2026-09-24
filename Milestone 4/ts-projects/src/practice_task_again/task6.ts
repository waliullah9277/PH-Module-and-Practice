/* Problem 6
Problem statement: Create a generic interface Container<T> with item: T. Create one Container<number> and one Container<string>.
Input: { item: 100 }, { item: "Books" }
Output: Container<number> = { item: 100 }, Container<string> = { item: "Books" } */

interface Container<T> {
    item: T,
}

const numContainer: Container<number> = {item: 100};
const strContainer: Container<string> = {item: "Books"};

console.log("Container<number> = ", numContainer);
console.log("Container<string> = ", strContainer);
