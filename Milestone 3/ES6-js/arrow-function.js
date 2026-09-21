// sayGreet()

// function sayGreet(name) {
//   return `Hello ${name}, Good morning.`;
// }

// Arrow function syntax
// const sayGreet  = ()=>{
// return "something"
// }


// for empty and multiple parameter -> first bracket is required
// for single parameter -> first bracket is optional

const sayGreet = (name) => `Hello ${name}, Good morning.`; //implicit return
console.log(sayGreet());





const sumFirstThenMultiplyByThree = (a, b) => {
  const sum = a + b;
  const multiply = sum * 3;
  return multiply;
};

const sayHi = () => "Hi";

console.log(sayGreet("Utsho"));
console.log(sumFirstThenMultiplyByThree(5, 5));

console.log(sayHi());


// console.log(this);


const student = {
    name: "Utsho",
    age: 26,
    showName: function(){
        console.log(this);
        return `Name: ${this.name}. Age: ${this.age}`
    },
    showAge: ()=> {
        console.log(this);
        return `Age: ${this.age}`
    }
}

console.log(student.showName());
console.log(student.showAge());