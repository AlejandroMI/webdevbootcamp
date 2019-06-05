//Example using express as a framework for our server:
var express = require("express");
var app = express();

//ROUTES//
app.get("/", function(req, res){
    res.send("Hello!")
});

app.get("/bye", function(req, res){
    res.send("Bye!!!")
});

//Route parameters or route variables. We use: ":routeName"
app.get("/p/:postName", function(req, res) {
 
//Now we can stablish the logic to handle diferent publications:
//We just need to get the route request parameter: 
    console.log(req.params); //returns a params object 
    var postN = req.params.postName;
    res.send("Welcome to our  " + postN + " posts");

});

//To create a defauklt route for not contemplated ones we do the following:
//WARNING: Has to be at the end of routes section or other ones will not be taken
app.get("*", function(req, res) {
    res.send("404 Error");
});


//INITIALIZE SERVER//
//in this case we use the port assigned by C9 but in local would be our machine (i.e. 3000)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started...");
});

//package.json holds information, metadata about a specific package, app or project
//dependencies are packages that the framework, library or app uses to run properly
//we can create one with "npm init" for our application. 
//Once is created we can add new packages to our app and use at the end --save to add these dependencies to our package.json
//So if someone else want to use our app, they have references of the packages that we are using 