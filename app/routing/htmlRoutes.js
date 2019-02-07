var path = require("path");

var friends = require("../data/friends.js");


module.exports = function(app) {
 
//survey route
app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname,"../public/survey.html"));
    
});
app.get("/api/friends", function (req, res) {
    // console.log("dm1");
    res.json(friends);
  });
//home route
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname,"../public/home.html"));
});


}
  
  