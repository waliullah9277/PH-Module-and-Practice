"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (students) => {
    const studentMarks = students.marks;
    const totalMarks = studentMarks.reduce((sum, student) => sum + student, 0);
    const average = totalMarks / studentMarks.length;
    const result = average >= 40 ? "Passed" : "Failed";
    return {
        name: students.name,
        average,
        result
    };
};
console.log(getStudentResult({ name: "Rafi", marks: [80, 75, 90, 85] }));
console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
}));
//# sourceMappingURL=5.getStudentResult.js.map