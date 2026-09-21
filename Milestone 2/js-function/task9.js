// login checker

function checkLogin(admin, password){
    const username = 'waliullah';
    const userPassword = 123456;
    if(username === admin && password === userPassword){
        console.log("Login Succesfully!");        
    }
    else{
        console.log("Invalid Username or Password! Please Try Again valid username or password!");        
    }
}

checkLogin('waliullah', 123456)