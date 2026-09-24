/* Problem 10
Problem statement: Create Employee interface (name, id, salary, department). Write updateEmployee using Partial<Employee>. Build two new types with Pick<Employee, "name" | "id"> and Omit<Employee, "salary">.
Input: updateEmployee({ name: "Rafi" })
Output: logs { name: "Rafi" }; Pick type = { name, id }; Omit type = { name, id, department } */

interface Employee {
    name: string,
    id: number,
    salary: number,
    department: string,
}

function updateEmployee(updates: Partial<Employee>): void{
    console.log(updates);    
}

updateEmployee({ name: "Rafi" })

type EmployeeBasic = Pick<Employee, "name" | "id">
const basic: EmployeeBasic = { name:"Rafi", id: 3 }
console.log(basic);

type EmployeePublic = Omit<Employee, "salary">;
const pub: EmployeePublic = {name: "Rafi", id: 3, department: "IT"};
console.log(pub);



