import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000

app.get("/", (req, res)=>{
    res.send("My first ever server side running!!!!")
})

app.get("/about", (req, res)=>{
    res.send("Our About Page....")
})

app.get("/contact-us", (req, res)=>{
    res.send("Our Contact Us Page....")
})


app.get("/dashboard", (req, res)=>{
    res.send("Our Dashboard Page....")
})



app.listen(PORT, ()=>{
    console.log(`Server is running on port no ${PORT}`);    
})