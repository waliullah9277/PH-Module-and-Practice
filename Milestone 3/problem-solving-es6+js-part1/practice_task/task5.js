// Task 5: getEmployeeDept(employee) — Nested Destructuring
// Given { name, job: { title, department } }, return { title, department } using nested destructuring.
// Input:
// { name: "Nadia", job: { title: "PM", department: "Product" } }
// Output:
// { title: "PM", department: "Product" }

const getEmployeeDept = (employee) => {
    // console.log(employee);
    let {job:{title, department}} = employee;
    // console.log(job);
    return {
        title,
        department,
    };
    
};

const employee = { 
    name: "Nadia", 
    job: { 
        title: "PM", 
        department: "Product" 
    } 
};

console.log(getEmployeeDept(employee));
