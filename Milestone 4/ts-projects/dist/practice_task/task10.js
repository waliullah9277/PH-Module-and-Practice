"use strict";
/* Problem 10
Problem statement: Create Employee interface (name, id, salary, department). Write updateEmployee using Partial<Employee>. Build two new types with Pick<Employee, "name" | "id"> and Omit<Employee, "salary">.
Input: updateEmployee({ name: "Rafi" })
Output: logs { name: "Rafi" }; Pick type = { name, id }; Omit type = { name, id, department } */
Object.defineProperty(exports, "__esModule", { value: true });
function updateEmployee(employee) {
    console.log(employee);
}
const employee1 = { name: "John", id: 1 };
const employee2 = { name: "Jane", id: 2, department: "HR" };
updateEmployee({ name: "Rafi" }); // Output: { name: "Rafi" }
console.log(employee1);
// Output: { name: "John", id: 1 }
console.log(employee2); // Output: { name: "Jane", id: 2, department: "HR" }
//# sourceMappingURL=task10.js.map