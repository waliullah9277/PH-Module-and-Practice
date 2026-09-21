// 14-9A: Temperature Converter
// Problem Statement: Should convert Celsius to Fahrenheit using the formula (C × 9/5) + 32.
// Input
// 0
// Expected Output
// 32


// Buggy Code:
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32; // find the bug
}
 
console.log(celsiusToFahrenheit(0)); // Expected: 32
