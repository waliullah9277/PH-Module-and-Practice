/* 10. Problem Statement:
একটি variable undefined হলে default value print করো।
Input:
username = undefined
Output:
Guest */

function userName(username: string = "Guest"):string{
    return username;
}
const username: undefined = undefined;
console.log(userName(username));
