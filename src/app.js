const express = require("express");
const app = express();
const path = require('path');
const hbs = require('hbs');
const { abort } = require("process");
const port = process.env.PORT || 8000;

// public static path
const static_path = path.join(__dirname, "../public");
const templatePath = path.join(__dirname,'../template/views');
const partialsPath = path.join(__dirname,'../template/partials');


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

// routing

app.get("/", (req,res) =>{
    res.render("index");    
})


app.get("/about", (req,res) =>{
    res.render("about");    
})


app.get("/weather", (req,res) =>{
    res.render("weather");    
})


app.get("*", (req,res) =>{
    res.render("error");    
})

app.listen(port, () =>{
    console.log(`Listening to port ${port}`)
})