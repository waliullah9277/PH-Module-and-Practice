// Using age and hasID, use nested if-else to check whether someone is eligible to vote.

const age = 16;
const hasID = false;
if(age >= 18){
    if(hasID){
        console.log("You can vote now.");        
    }
    else{
        console.log("Your Id is not found!")
    }
}
else{
    console.log("You are a child");
    
}