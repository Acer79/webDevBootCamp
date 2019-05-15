var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment    = require("./models/comment");

var data = [
     {
         name:"Cloud's Rest",
         image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc urna, ultricies et tellus non, iaculis aliquet nibh. Donec consectetur pellentesque sagittis. Ut hendrerit risus at viverra tristique. Aenean dictum tincidunt lobortis. Quisque auctor auctor est sit amet consequat. Integer nisl mi, dignissim ac neque eget, scelerisque hendrerit urna. Vestibulum sit amet consectetur tortor. Nulla aliquam magna nec consequat lacinia. Curabitur pulvinar tincidunt hendrerit. Suspendisse ultrices quam leo, non aliquam tellus dapibus quis.  Morbi ullamcorper sem massa, sed feugiat libero condimentum ultrices. Duis malesuada felis sem, sit amet commodo quam vestibulum non. Sed aliquam, dolor vel rhoncus venenatis, magna nunc gravida neque, et condimentum sem libero vel enim. Sed nunc urna, ullamcorper ac nibh in, sollicitudin viverra quam. Cras tortor diam, sodales quis velit et, placerat porta enim. Sed vel urna ut erat sollicitudin fringilla. Duis a est congue, tempor libero sit amet, hendrerit purus. Sed auctor tempor semper."
     },
     {
         name:"Buggy Hill",
         image: "http://www.photosforclass.com/download/6042217185",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc urna, ultricies et tellus non, iaculis aliquet nibh. Donec consectetur pellentesque sagittis. Ut hendrerit risus at viverra tristique. Aenean dictum tincidunt lobortis. Quisque auctor auctor est sit amet consequat. Integer nisl mi, dignissim ac neque eget, scelerisque hendrerit urna. Vestibulum sit amet consectetur tortor. Nulla aliquam magna nec consequat lacinia. Curabitur pulvinar tincidunt hendrerit. Suspendisse ultrices quam leo, non aliquam tellus dapibus quis.  Morbi ullamcorper sem massa, sed feugiat libero condimentum ultrices. Duis malesuada felis sem, sit amet commodo quam vestibulum non. Sed aliquam, dolor vel rhoncus venenatis, magna nunc gravida neque, et condimentum sem libero vel enim. Sed nunc urna, ullamcorper ac nibh in, sollicitudin viverra quam. Cras tortor diam, sodales quis velit et, placerat porta enim. Sed vel urna ut erat sollicitudin fringilla. Duis a est congue, tempor libero sit amet, hendrerit purus. Sed auctor tempor semper."
     },
     {
         name:"The Swamp",
         image: "http://www.photosforclass.com/download/246477439",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc urna, ultricies et tellus non, iaculis aliquet nibh. Donec consectetur pellentesque sagittis. Ut hendrerit risus at viverra tristique. Aenean dictum tincidunt lobortis. Quisque auctor auctor est sit amet consequat. Integer nisl mi, dignissim ac neque eget, scelerisque hendrerit urna. Vestibulum sit amet consectetur tortor. Nulla aliquam magna nec consequat lacinia. Curabitur pulvinar tincidunt hendrerit. Suspendisse ultrices quam leo, non aliquam tellus dapibus quis.  Morbi ullamcorper sem massa, sed feugiat libero condimentum ultrices. Duis malesuada felis sem, sit amet commodo quam vestibulum non. Sed aliquam, dolor vel rhoncus venenatis, magna nunc gravida neque, et condimentum sem libero vel enim. Sed nunc urna, ullamcorper ac nibh in, sollicitudin viverra quam. Cras tortor diam, sodales quis velit et, placerat porta enim. Sed vel urna ut erat sollicitudin fringilla. Duis a est congue, tempor libero sit amet, hendrerit purus. Sed auctor tempor semper."
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