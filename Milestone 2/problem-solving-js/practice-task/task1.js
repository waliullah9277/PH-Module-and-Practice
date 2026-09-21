// Task 13-2A: Hot, Cold, or Normal
// Problem Statement:
// Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.
// Input
// 35
// 10
// 20
// Output
// "Hot"
// "Cold"
// "Normal"

function checkTemperature(temp) {
  if(temp >= 30){
    return 'Hot';
  }else if(temp <= 15){
    return 'Cold';
  }else{
    return 'Normal';
  } 
}
 
console.log(checkTemperature(35)); // Expected: "Hot"
console.log(checkTemperature(10)); // Expected: "Cold"
console.log(checkTemperature(20)); // Expected: "Normal"

