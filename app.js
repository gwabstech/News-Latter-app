const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log("Server is runing on port 3000")
})

app.get("/" ,(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})

app.post("/",(req,res)=>{
    var fName = req.body.fName
    var lName = req.body.lName
    var email = req.body.email

    console.log(fName,lName,email)
})

// api key
//38b3fc234fbe55ac3d27b465686b16c0-us13
