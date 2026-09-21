// Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".

const isLoggedIn = true;
const isAdmin = true;

if(isLoggedIn){
    if(isAdmin){
        console.log("Admin Dashboard");        
    }
    else{
        console.log("User Dashboard");        
    }
}
else{
    console.log("Please Login!");    
}