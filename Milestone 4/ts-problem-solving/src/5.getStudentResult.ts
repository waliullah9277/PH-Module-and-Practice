
interface Student {
    name: string
    marks: number[]
}

interface Result {
    name: string
    average: number
    result: string
}

const getStudentResult = (students: Student): Result =>{
    const studentMarks: number[] = students.marks;
    const totalMarks: number = studentMarks.reduce((sum, student) => sum + student, 0)
    const average: number = totalMarks / studentMarks.length;
    const result:string = average >= 40 ? "Passed" : "Failed";

    return {
        name: students.name,
        average,
        result
    }
}

console.log(getStudentResult({name: "Rafi", marks: [80, 75, 90, 85]}));
console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
})
);

