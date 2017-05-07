var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all routes and set up logic within routes 
router.get("/", function(req, res) {
	burger.all(function(data) {
		var object = {
			burgers: data
		};
		console.log(object);
		res.render("index", object);
	});
}); // End router.get

router.post("/", function(req, res) {
	console.log("req.body.burger_name: ", req.body.burger_name);
	burger.create(req.body.burger_name, function(result) {

		res.redirect("/");
		console.log(result);
	});
}); // End router.post

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	
	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
}); // End router.put

// Export routes for server.js to use
module.exports = router;