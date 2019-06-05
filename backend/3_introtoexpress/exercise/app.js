var express = require("express");
var app = express();

//ROUTES
app.get("/", function(req, res){
    res.send("Hey, welcome to my exrecise!");
});

app.get("/speak/:animalName", function(req, res){
   var sounds = {
       pig: "oink",
       cow: "moo",
       dog: "woof"
   }
   var animal  = req.params.animalName.toLowerCase();
   var sound = sounds[animal]; 
   
   res.send("The " + animal + " says " + sound);
   
});

app.get("/repeat/:word/:num", function(req, res) {
    
    var number = req.params.num;
    var message = req.params.word;
    var result = "";
    
    for (var i = 1; i <= number; i++) {
        result += message + " ";
    }
    
    res.send(result);
});

app.get("*", function(req, res) {
    res.send("SORRY PAGE NOT FOUND");
});

//SERVER
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started...");
});