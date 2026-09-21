
function checkAge(Student){
    // console.log(Student);
    const age = Student.age;
    // console.log(age);
    if(age >= 18){
        return age;
    }
    else{
        return age;
    }      
}

const Student = {
    name: 'Waliullah',
    age: 16,
    isStudent: true,
    profession: 'Full Stack Developer'
}

const vote = checkAge(Student);
if(vote){
    console.log("Your age is " + vote + " years now you can vote Now.");
}
else{
    console.log(`Your age is ${vote} year, so your cannot vote now!`);    
}
