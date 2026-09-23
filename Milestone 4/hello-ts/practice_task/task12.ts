/* 12. Problem Statement:
একটি TypeScript program বানাও যেখানে একজন user-এর নাম, বয়স, email, skills, আর active status থাকবে। এরপর সব তথ্য print করবে।
Input:
{
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true
}
Output:
Name: Amina
Age: 22
Email: amina@email.com
Skills: HTML, CSS, TypeScript
Active: true */


const userProfile: {
    usrName: string,
    age: number,
    email: string,
    skills: string[],
    active: boolean,
} = {
  usrName: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true
}

const {usrName, age, email, skills, active} = userProfile;
console.log(`Name: ${usrName}\nAge: ${age}\nEmail: ${email}\nSkills: ${skills.join(", ")} \nActive: ${active}`);

