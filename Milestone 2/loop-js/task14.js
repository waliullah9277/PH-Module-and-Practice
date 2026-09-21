// Task 14 — Mini Challenge
// Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.

for (i = 1; i <= 100; i++) {
  if (i > 40) {
    break;
  }
  if (i % 5 == 0) {
    continue;
  }
  console.log(i);
}
