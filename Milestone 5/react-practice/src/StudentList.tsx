
import type { StudentProps } from "./App";

interface StudentListProps {
    students: StudentProps[];
}

export default function Student({students} : StudentListProps){
    return (
        <>
            {students.map(student =>{
              return  (
                <div key={student.id} style={{border: "1px solid red", margin: "10px"}}>
                    <ul>
                        <li>ID: {student.id}</li>
                        <li>Name: {student.name}</li>
                        <li>Marks: {student.grade}</li>
                        <li>Status: {student.grade >= 40 ? "Pass" : "Fail"}</li>
                    </ul>
                </div>
              )
            })}
        </>
    )

}