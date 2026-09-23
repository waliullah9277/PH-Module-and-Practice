"use strict";
/* 10. Problem Statement:
একটি variable undefined হলে default value print করো।
Input:
username = undefined
Output:
Guest */
function userName(username = "Guest") {
    return username;
}
const username = undefined;
console.log(userName(username));
