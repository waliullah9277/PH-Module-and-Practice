// Task 9 — Sum of Even Numbers
// Write a for loop that calculates the sum of all even numbers from 2 to 50.

let sum = 0;
for(i=2; i<=50; i++){
    if(i%2==0){
        sum += i;
    }
}
console.log("The (2 to 50 even number) sum is:", sum);

