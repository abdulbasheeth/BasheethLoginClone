const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())

var username= "Abdul"
var password = 123

app.use(express.urlencoded({extended:true}))

app.get("/login",function(req,res){
      
     console.log(req.query.username)
    if(req.query.username === username && req.query.password == password){
        res.send("true")
    }
    else{
        res.send("false")
       
    }
    
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});