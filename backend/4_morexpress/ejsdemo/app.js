 

 var express = require("express");
 var app = express();
 
 //Server the static content of the public folder, like CSS stylesheet
 app.use(express.static("public"));
 //Tell express that we are using ejs for views
 app.set("view engine", "ejs");
 
 /// ROUTES ///
 
 //Default
 app.get("/", function(req, res){
    //res.send("Welcome to the homepage"); 
    //Now using ejs
    res.render("home");
 });
 
 //Love
 app.get("/love/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love", {thingVar:thing});
    //We include some of our conde in the ejs
    //res.render("love.ejs", {thingVar:thing});
 });
 
 //Posts
 app.get("/posts", function(req, res) {
    var posts = [
        {name: "Susi", title: "My first post"},
        {name: "David", title: "Tu vapeas?"},
        {name: "Alex", title: "Buah que coñazo"}
        ];
    res.render("posts", {posts:posts});
 });
 
 app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started on Port: " + process.env.PORT ); 
 }); 