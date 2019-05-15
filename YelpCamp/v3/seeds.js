var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment    = require("./models/comment");

var data = [
     {
         name:"Cloud's Rest",
         image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
         description: "blah blah blah"
     },
     {
         name:"Buggy Hill",
         image: "http://www.photosforclass.com/download/6042217185",
         description: "blah blah blah"
     },
     {
         name:"The Swamp",
         image: "http://www.photosforclass.com/download/246477439",
         description: "blah blah blah"
     }
]

function seedDB() {
    //Remove all campgrounds
Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds!");
            //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err) {
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                               campground.comments.push(comment);
                               campground.save();
                               console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });

    //add a few comments
}

module.exports = seedDB;