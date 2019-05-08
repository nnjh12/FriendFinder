# FriendFinder

## Preview Link
https://agile-dusk-62057.herokuapp.com/

## Main functionality of this App
1. Answer a few basic questions.
1. Find the friend with the greatest compatibility.
1. You can see best friend name and photo.

## File Structure
  ```
  FriendFinder
    - app
      - data
        - bestMatch.js
        - friends.js
      - public
        - home.html
        - survey.html
        - result.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - server.js
  ```
## Route
* / : Home route (home.html) / GET
* /survey : Survey route (survey.html) / GET
* /results : result route (result.html) / GET
* /api/friends : friends DB route / GET, POST
* /api/results : Best match result DB route / GET, POST

## Front-end process
1. At the Home route, when client click "Go to Survey" button
    1.  Go to Survey route
1. At the Survey route, when client click "Submit" button
    1. Check if client answers all the questions. If yes, go to next steps.
    1. Post answers to "/api/friends" routes.
    1. Get all the data from "/api/friends" and find the best match friend.
        * The last data in "/api/friends" is client's answer.
        * So, compare client's answer with all other data except the last one.
        * Loop though except the last data.
    1. Post best matched friend to "/api/results" route.
    1. Load result route.
    ```
    window.location.replace("/results")
    ```
1. When client hit the "results" route (by clicking "submit" button at survey route.),
    1. Get the data from "/api/results" route and display them.
    1. The last data is client's best match results.

## Back-end process
1. apiRoutes.js handles data files (bestMatch.js, friends.js)
    1. get 
    ```
    app.get("/api/friends", function (req, res) {
        res.json(Friends);
    });
    ```
    1. post
    ```
    app.post("/api/friends", function(req,res){
        Friends.push(req.body)
    })
    ```
1. htmlRoutes.js handles HTML files (home.html, survey.html, result.html) 
    1. get
    ```
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    ```
1. server.js handles apiRoutes.js, htmlRoutes.js and express.