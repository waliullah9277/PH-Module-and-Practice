// User Profile Extractor

const extractUserInfo = (userObj) => {
    let {user: {name: userName, age}, hobbies: [firstHobby = "nothing yet"]} = userObj;
    if(!userName){
        return "Invalid";
    }
    return `${userName} (${age}) likes ${firstHobby}`    
}

console.log(extractUserInfo({user:{name:"Sadia",age:22}, hobbies:["reading","coding"]}));
console.log(extractUserInfo({user:{name:"Rafi",age:19}, hobbies:[]}));
console.log(extractUserInfo({user:{age:30}, hobbies:[]}));
