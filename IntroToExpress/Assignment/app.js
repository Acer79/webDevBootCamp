var express = require("express");
var app = express();

app.get ("/", function (req, res){
    res.send("Hi there, welcome to my Assignment!");
});

app.get ("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "MEOW",
        chicken: "Cluck Cluck"
    };
    var animalName = req.params.animal.toLowerCase();
    var sound = sounds[animalName];
    res.send("The " + animalName + " says " + sound);
/*    if (animalName === "pig") {
    res.send("The " + animalName + " says 'Oink'");
    } else if (animalName === "cow") {
        res.send("The " + animalName + " says 'Moo'");
    } else if (animalName === "dog") {
        res.send("The " + animalName + " says 'Woof Woof'");
    } else if (animalName === "chicken") {
        res.send("The " + animalName + " says 'Cluck Cluck'");
    } else if (animalName === "cat") {
        res.send("The " + animalName + " says 'Meow'");
    }*/
});

app.get("/repeat/:word/:number", function (req, res){
    var wordInput = req.params.word;
    var num = Number(req.params.number);
    var result = "";
    for (var i=0; i < num; i++) {
        result += wordInput + " ";
        // Alternate option to writing the message
        //res.write(JSON.stringify(wordInput));
    }
    //res.end();
    res.send(result);
});

app.get("*", function(req, res){
    res.send("Sorry, Page Not Found....What are you doing with your life???");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});