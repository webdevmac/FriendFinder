var path = require("path");

 

module.exports = function(app) {
 
//survey route
app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname,"../public/survey.html"));
    
});
//home route
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname,"../public/home.html"));
});

}
  
  