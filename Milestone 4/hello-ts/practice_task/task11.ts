/* 11. Problem Statement:
একটি unknown type variable declare করো এবং পরে type check করে string হলে print করো।
Input:
"Hello"
Output:
Hello */

let say: unknown = "Hello";

if(typeof say === "string"){
    console.log(say);    
}
