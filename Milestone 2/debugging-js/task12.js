// 14-9D: Object Property Update
// Problem Statement: Should update a person's age property and return the updated object.
// Input
// { name: "Lee", age: 20 }, 21
// Expected Output
// { name: "Lee", age: 21 }

// Buggy Code:
function updateAge(person, newAge) {
  person.age = newAge; // find the bug
  return person;
}

console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }
