/* 
Task 6: createIdGenerator() — Closures 
Return a function that generates a new sequential ID starting from 1 each time it is called, using an internal counter with no global variable.
Input: 
const nextId = createIdGenerator(); 
nextId(); 
nextId(); 
nextId();

Output: 1, 2, 3

*/

const createIdGenerator = () => {
    let counter = 0;
    return () => {
        counter++;
        return counter;
    }
}

const nextId = createIdGenerator(); 
console.log(nextId());
console.log(nextId());
console.log(nextId());
