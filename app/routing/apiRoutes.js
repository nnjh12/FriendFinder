var Friends = require("../data/friends")
var BestMatch = require("../data/bestMatch")

var ApiFunction = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(Friends);
    });

    app.post("/api/friends", function(req,res){
        Friends.push(req.body)
    })

    app.get("/api/results", function (req, res) {
        res.json(BestMatch);
    });

    app.post("/api/results", function(req,res){
        BestMatch.push(req.body)
    })


}

module.exports = ApiFunction
