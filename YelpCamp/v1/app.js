var express = require("express")
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

    var campgrounds = [
        {name: "Gull Lake", image: "http://www.photosforclass.com/download/14435096036"},
        {name: "Granite Hill", image: "http://www.photosforclass.com/download/32853307921"},
        {name: "Goose Mountain", image: "http://www.photosforclass.com/download/1342367857"},
        {name: "Banff National Park", image: "http://www.photosforclass.com/download/15989950903"},
        {name: "Gull Lake", image: "http://www.photosforclass.com/download/14435096036"},
        {name: "Granite Hill", image: "http://www.photosforclass.com/download/32853307921"},
        {name: "Goose Mountain", image: "http://www.photosforclass.com/download/1342367857"},
        {name: "Banff National Park", image: "http://www.photosforclass.com/download/15989950903"},
        {name: "Gull Lake", image: "http://www.photosforclass.com/download/14435096036"},
        {name: "Granite Hill", image: "http://www.photosforclass.com/download/32853307921"},
        {name: "Goose Mountain", image: "http://www.photosforclass.com/download/1342367857"},
        {name: "Banff National Park", image: "http://www.photosforclass.com/download/15989950903"}
    ]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){

    res.render("campgrounds", {campgrounds: campgrounds});
});


app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
});

