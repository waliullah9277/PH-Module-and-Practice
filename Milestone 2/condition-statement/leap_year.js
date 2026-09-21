// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).

const year = 2005;
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log(year, "is leap year!");    
}
else{
    console.log(year, "Not leap year!");    
}