module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING, // AllowNull is a flag that restricts a burger from being entered if it doesn't
      // have a text value
      allowNull: false, // len is a validation that checks that our burger is between 1 and 140 characters
      validate : {
        len: {
          args: [1, 140],
          msg : 'Please enter a TODO less than 140 Characters, or greater than 1.'
        }
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN, // defaultValue is a flag that defaults a new burger complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Burgers;
};







// Import the ORM to create functions that will interact with the database
// var orm = require("../config/orm.js");


// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   }, // End all: function

//   // The variables cols and vals are arrays.
//   create: function(name,cb) {
//     orm.create("burgers",[
//     	"burger_name", "devoured"
//     	], 
//     	[ name , false], 
//     	cb);  
//   }, // End create: function

//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", {
//     	devoured: true}, condition, function(res) {
//       	cb(res);
//     });
//   }, // End update: function 

//   delete: function(name, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   } // End delete: function 

// }; // End burger variable

// // Export the database functions for the controller (burgers_controller.js).
// module.exports = burger;
