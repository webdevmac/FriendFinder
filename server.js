
//Dependencies
const express = require("express");

//store the express function in the app variable
const app = express();

const PORT = process.env.PORT || 3000;

// For serving of static CSS
app.use(express.static(__dirname + "/app/css"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//import route files into a variable
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes.js');
//run the variables as a function
htmlRoutes(app);
apiRoutes(app);





//load view engine
// app.set('public', path.join(__dirname,'app/public'));
// app.set('view engine', 'html');




//start server
app.listen(PORT, function(){
    console.log("server started on port 3000");
});