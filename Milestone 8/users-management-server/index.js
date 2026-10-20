import express from 'express';
import cros from "cors"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cros())
app.use(express.json())

app.get("/", (req, res) =>{
       
    res.send("Welcome to Users Management server!!!!")
})

const users = [
    {id: 1, name: "Waliullah", email: "waliullah@cse.com"},
    {id: 2, name: "Jakia Sultana", email: "jakia@sultana.com"},
    {id: 3, name: "Jakia Sultana Mitu", email: "jakia.sultana@mitu.com"},
    {id: 4, name: "Md Waliullah", email: "md.waliullah@cse.com"},
]

app.get("/users", (req, res) =>{
    res.send(users)
})

app.post("/users", (req, res) =>{
    console.log("receive the data client", req.body)
    
    // temparory data storage
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    
    res.send({success: true, message: "User add Successfully"})
})



app.listen(PORT, ()=>{
    console.log(`Server is running port no is ${PORT}`)
})