/* 
Task 9: isStrictMatch(input, target) — Truthy/Falsy and === 
Return true only if input strictly equals target in both value and type, false otherwise.
Input: isStrictMatch("18", 18) 
Output: false
Input: isStrictMatch(18, 18) 
Output: true

*/

const isStrictMatch = (input, target) => {
    // console.log(input, target);   
    if(input === target){
        return true;
    } else{
        return false;
    }
}

console.log(isStrictMatch("18", 18));
console.log(isStrictMatch(18, 18));
