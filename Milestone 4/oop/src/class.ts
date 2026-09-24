class Student {
    name: string
    email: string
    age: number
    marks: number

    // cosntructor 
    constructor(name: string, email: string, age: number, marks: number){
        this.name = name
        this.email = email
        this.age = age
        this.marks = marks
    }
}


const wali = new Student("Waliullah", "waliullah@gmail.com", 26, 101)
const jakia = new Student("Jakia", "jakia@gmail.com", 18, 150)

console.log(wali, jakia);
