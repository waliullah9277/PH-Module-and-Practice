/* Problem 10
Problem statement: Create Employee interface (name, id, salary, department). Write updateEmployee using Partial<Employee>. Build two new types with Pick<Employee, "name" | "id"> and Omit<Employee, "salary">.
Input: updateEmployee({ name: "Rafi" })
Output: logs { name: "Rafi" }; Pick type = { name, id }; Omit type = { name, id, department } */

interface Employee {
    name: string;
    id: number;
    salary: number;
    department: string;
}

function updateEmployee(employee: Partial<Employee>): void {
    console.log(employee);
}

type EmployeeNameId = Pick<Employee, "name" | "id">;
type EmployeeWithoutSalary = Omit<Employee, "salary">;

const employee1: EmployeeNameId = { name: "John", id: 1 };
const employee2: EmployeeWithoutSalary = { name: "Jane", id: 2, department: "HR" };

updateEmployee({ name: "Rafi" }); // Output: { name: "Rafi" }
console.log(employee1);

// Output: { name: "John", id: 1 }
console.log(employee2); // Output: { name: "Jane", id: 2, department: "HR" }

