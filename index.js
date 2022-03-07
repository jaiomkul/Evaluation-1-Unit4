const express =require("express");

const app = express();

app.use(logger);
app.use(logger1);

app.get("/books",(req,res) =>{
    console.log("port 5000");

    return res.send({route:"/books"});
});

app.get("/libraries",(req,res) =>{
    console.log("port 5000");

    return res.send({route:"/libraries"});
});


app.get("/authors",(req,res) =>{
    console.log("port 5000");

    return res.send({route:"/authors"});
});


function logger(req, res, next){
    console.log("Handler")
    next();
}

function logger1(req, res, next){
    console.log("Handler")
    next();
}


app.listen(5000,() =>{
    console.log("port 5000");
});