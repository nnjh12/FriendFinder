var path = require("path");

var HtmlFunction = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname,  "../public/survey.html"));
    });

    app.get("/results", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/result.html"));
    });
}


module.exports = HtmlFunction