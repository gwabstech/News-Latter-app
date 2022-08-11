const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express()
const port = 3000

app.use(express.static("public"))
app.listen(port,()=>{
    console.log("Server is runing on port 3000")
})

app.get("/" ,(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})
