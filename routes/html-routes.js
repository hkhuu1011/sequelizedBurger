// Dependency
// var path = require("path");
var db = require("../models");

// Routes
module.exports = function(app) {
  // index route loads view.html
  app.get("/", function(req, res) {
  	db.Burgers.findAll({}).then(function(dbBurgers) {
  		var hbsObject = {
  			burgers: dbBurgers
  		};
  		res.render("index", hbsObject);
  	});
    // res.sendFile(path.join(__dirname + "/../public/test.html"));
  });

};
