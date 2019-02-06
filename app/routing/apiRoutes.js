


var friends = require("../data/friends.js");

//export to server.js
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    console.log("dm1");
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    // console.log(req.body.scores);
    var user = req.body;

    // parseInt for scores
    for (var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }
    // defaults to first friend match until all friends are compared
    var bestFriend = [];
    var minimumDifference = 40;

    friends.forEach(friend => {
      var totalDif = 0;
      for (var i = 0; i < user.scores.length; i++) {
        var userDif = Math.abs(user.scores[i] - friend.scores[i]);
        totalDif += userDif;

        // console.log(userDif);
        // console.log('line 33  ' + totalDif);
      }
        if (totalDif < minimumDifference) {
          
          minimumDifference = totalDif;
          bestFriend = friend;
        }

      
      // console.log('line 39  ' + minimumDifference);
    });

    //after finding match, add user to friend array
    friends.push(user);
    // console.log(friends);
    //send back to browser the best friend match
    res.json(bestFriend);
    console.log(bestFriend);

  });
}