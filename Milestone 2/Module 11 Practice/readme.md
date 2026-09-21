MODULE 11 · PRACTICE WORKSHEET
Fundamentals of Strings & Objects


Task 1.1 — Spot the Difference
let str = "hello";
let arr = ["h", "e", "l", "l", "o"];
Log str.length and arr.length. What do you notice?
Try str[0] and arr[0]. Do both work the same way?
Try str.push("!") — what happens? Why does this fail for strings but not arrays?

Task 1.2 — Convert Between Them
Convert the string "JavaScript" into an array of characters.
Convert the array ["c", "a", "t"] back into a single string "cat".


Task 2.1 — Case Conversion
let name = "JavaScript";
Print the uppercase version.
Print the lowercase version.
Print the string with whitespace trimmed: "   hi there   " → "hi there"


Task 3.1 — Slicing Strings
let sentence = "Learning JavaScript is fun!";
Get just the word "Learning" using .slice().
Get the last 4 characters ("fun!") using .slice() with a negative index.
Task 3.2 — Combine Strings
Use .concat() to join "Hello" and "World" into "Hello World".
Use + and template literals to do the same thing. Compare all three approaches.


Task 4.1 — Three Reversal Methods
Write a function reverseString(str) three different ways:
Using .split(""), .reverse(), and .join("")
Using a for loop that builds the reversed string character by character


Test all three with "JavaScript" → should return "tpircSavaJ".
Bonus: Which method do you think is fastest? Why?


Task 5.1 — Build a Profile Object
Create an object student with these properties: name, age, grade, and isEnrolled.
Log the whole object.
Log just the name property using dot notation.
Task 5.2 — Watch the Video Concept
After watching the "What is an Object" video, write 2–3 sentences (as a comment in your code) explaining an object in your own words, using a real-life analogy (not a car or a person — get creative!).


Task 6.1 — Dot vs Bracket Notation
let car = { brand: "Toyota", model: "Corolla", year: 2022 };
Get brand using dot notation.
Get model using bracket notation.
Add a new property color: "blue" using bracket notation.
Update year to 2023 using dot notation.




Task 7.1 — Keys and Values
let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
Get an array of all keys 
Get an array of all 
Delete the pages property using delete.

Task 7.2 — Nested Objects
let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}
Log the city using dot notation chaining.
Add a country property inside the address.
Delete the zip property from the nested object.


Task 8.1 — Loop Through Properties
let scores = { math: 90, science: 85, art: 95 };
Use a for...in loop to log each key and value like: math: 90.
Calculate the average of all values in the loop.



Task 9.1 — Contact Book
Build a small "contact" system:
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};
Convert the email to lowercase and update the object.
Loop through the contact object and print each key-value pair.
Add a new property favoriteWords: [] (an array) — push 3 words to it.
Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.
