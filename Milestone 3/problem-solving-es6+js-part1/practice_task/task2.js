// Task 2: buildProfileCard(user) — Template Literals 
// Given { name, title, company }, return a multiline string using template literal interpolation only.

// Input:  
// { name: "Arif", title: "Developer", company: "Programming Hero" }
// Output: 
// "Arif\nDeveloper at Programming Hero"

const buildProfileCard = (user) => {
    // console.log(user);    
    let {name, title, company} = user;
    // console.log(name, title, company);
    return `${name} \n${title} at ${company}`       
}

console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }));
