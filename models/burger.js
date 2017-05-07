// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");


var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  }, // End all: function

  // The variables cols and vals are arrays.
  create: function(name,cb) {
    orm.create("burgers",[
    	"burger_name", "devoured"
    	], 
    	[ name , false], 
    	cb);  
  }, // End create: function

  update: function(objColVals, condition, cb) {
    orm.update("burgers", {
    	devoured: true}, condition, function(res) {
      	cb(res);
    });
  }, // End update: function 

  delete: function(name, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  } // End delete: function 

}; // End burger variable

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
