// const http = require("http"); // in expressjs we will not be having http protocol. instead we will have (check next line)
const express = require("express");

// initialisation 
const app = express()

// after initializing we need to use the app created
app.use(express.json()) // app will now only use json data format(the benefito of using express)

const port=8000;

const toDoList = ["hey everyone","hope you all","are doing","great in life."];  //array

// here with express to call the api , we follow the below code
app.get("/todos",(req,res)=>{
    //callback
    res.status(200).send(toDoList)
})

app.listen(port,()=>{
    console.log(`Node JS with express started running successfully on port ${port}`)
})
