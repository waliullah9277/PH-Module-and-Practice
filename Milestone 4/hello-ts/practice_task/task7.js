"use strict";
/* 7. Problem Statement:
একটি function বানাও যা যেকোনো সংখ্যক number নিয়ে তাদের sum করবে।
Input:
sumAll(1, 2, 3, 4)
Output:
10 */
function sumAll(...num) {
    let total = 0;
    for (let n of num) {
        total += n;
    }
    return total;
}
console.log(sumAll(1, 2, 3, 4));
