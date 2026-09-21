// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).

const username = 'wali77';
const pass = 12345678;

const inputUsername = 'wali77';
const userPass = 12345678;

const isAdmin = false;

if(inputUsername === username && userPass === pass){
    isAdmin ? console.log("Admin Dashboard") : console.log("User Dashboard");
}
else{
    console.log("Invalid Credential! Please correct username or password");
    
}
