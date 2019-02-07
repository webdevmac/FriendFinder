# FriendFinder

Link
https://webdevfriendfinder.herokuapp.com/

Code Explanation
Our server.js file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
Our 2 routing files (htmlRoutes.js and apiRoutes.js) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends
Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
A modal is then toggled, displaying the the best match to the person who just took the survey
Friends are stored as such:
{
	name: "Dave",
	photo: "https://vignette3.wikia.nocookie.net/itsalwayssunny/images/0/0a/Charlie_%289%29.jpg",
	scores: [5, 1, 2, 3, 1, 2, 5, 1, 1, 1]
}
