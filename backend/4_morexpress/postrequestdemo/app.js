var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

//Variables
 var friends = ["Rodrigo", "David", "Cister", "Pablo"];

//Routes
app.get("/", function(req,res){
    res.render("home");
});

app.get("/friends", function(req,res){
    res.render("friends", {friends:friends});
});

//Now we have to handle post requests
app.post("/addFriend", function(req, res){
    var newFriend = req.body.newFriend
    console.log("POST request received to add: " + newFriend);
    friends.push(newFriend);
    res.redirect("/friends");
});

//Server Init
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started on PORT: " + process.env.PORT + " on IP: " + process.env.IP);
});