// 13-10B: Reverse the Word Order
// Problem Statement: Write a function reverseWords that takes a sentence and returns it with the order of the words reversed (the letters inside each word stay the same).
// Input
// "hello world"
// Output
// "world hello"

function reverseWords(sentence) {
    let reverseWord = sentence.split(' ').reverse().join(' ');
    return reverseWord;     
}
 
console.log(reverseWords("hello world")); // Expected: "world hello"

