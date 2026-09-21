/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/

const applyDiscount = (prices, discountRate = 5) => {
    // console.log(prices);   
    const afterDiscountPrice = prices.map((elem, ind, arr) =>{
        // console.log(elem, ind);
        const discountPrice = elem - (elem * discountRate) / 100;
        // console.log(discountPrice);        
        return discountPrice;        
    }) 
    return afterDiscountPrice;    
}

const productPrices = [500, 1000, 250];
// console.log(applyDiscount([500, 1000, 250], 10));
// console.log(productPrices);



/*
  Problem 2: Passing Students Filter
  getPassingStudents(students, threshold) — return only the students
  whose marks are greater than or equal to the given threshold.

  Input:
    students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
    ]
    threshold = 60

  Output:
    [
      { name: "Rafi", marks: 75 },
      { name: "Utsho", marks: 60 },
    ]
*/

const  getPassingStudents = (students, threshold) => {
    // console.log(students);  
    const passingStudent = students.filter((student) =>{
        let {marks} = student;
        // console.log(student);  
        // if(marks >= threshold){
        //     return true;
        // }else {
        //     return false;
        // } 
        return marks >= threshold;     
    })  
    return passingStudent;
}

let students = [
  { name: "Rafi", marks: 75 },
  { name: "Karim", marks: 40 },
  { name: "Utsho", marks: 60 },
  { name: "Akash", marks: 59 },
];

console.log(getPassingStudents(students, 60));
console.log(getPassingStudents(students, 50));


