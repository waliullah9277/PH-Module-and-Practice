"use strict";
/* Problem 10
Problem statement: Create Employee interface (name, id, salary, department). Write updateEmployee using Partial<Employee>. Build two new types with Pick<Employee, "name" | "id"> and Omit<Employee, "salary">.
Input: updateEmployee({ name: "Rafi" })
Output: logs { name: "Rafi" }; Pick type = { name, id }; Omit type = { name, id, department } */
Object.defineProperty(exports, "__esModule", { value: true });
function updateEmployee(updates) {
    console.log(updates);
}
updateEmployee({ name: "Rafi" });
const basic = { name: "Rafi", id: 3 };
console.log(basic);
const pub = { name: "Rafi", id: 3, department: "IT" };
console.log(pub);
//# sourceMappingURL=task10.js.map