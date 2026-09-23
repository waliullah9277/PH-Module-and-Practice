/* 5. Problem Statement:
একটি user object বানাও যেখানে name required, কিন্তু email optional।
Input:
{ name: "Amina" }
Output:
Name: Amina, Email: Not provided */

function userInformation(userInfo: {name: string, email?:string}): string{
    let {name, email="Not provided"} = userInfo;
    return `Name: ${name}, Email: ${email}`;
}

const userInfo: {name: string, email?: string} = {
    name: "Amina",
}
console.log(userInformation(userInfo));
