// destructring for array
let numbers = [10, 20, 30, 40, 50]
// traditional ways
// let ten = numbers[0]
// let twenty = numbers[1]
// let thirty = numbers[2]

let [ten, twenty, fifty] = numbers;
// console.log(ten, twenty, fifty);

// destructing for objects
const student = {
    name: 'Waliullah',
    age: 26,
    depratment: 'CSE',
    marks: {
        ML: 66,
        AI: 73,
        CN: 58,
    }
}

// traditional ways
// let name = student.name
// let age = student.age
// let depratment = student.depratment

// let AI = student.marks.AI

let {depratment, age, name, marks:{AI, ML, CN} } = student

console.log(name, age, depratment, AI, ML, CN);

