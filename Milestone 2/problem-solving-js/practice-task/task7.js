// Task 13-5A: Check for a Palindrome
// Problem Statement:
// Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces.
// Input
// "level"
// "hello"
// Output
// true
// false

function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    if(reverseStr === str){
        return true;
    }else{
        return false;
    }
}
 
console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false

