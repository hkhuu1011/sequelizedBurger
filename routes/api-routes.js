// Requiring our models
var db = require("../models");

// Routes
module.exports = function(app) {
  // GET route for getting all of the burgers
  app.get("/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burgers.findAll({}).then(function(dbBurgers) {
      // We have access to the burgers as an argument inside of the callback function
      // return res.render('index', {burger_data: dbBurgers});
      res.json(dbBurgers);
    });
  });

  // POST route for saving a new burger
  app.post("/addburger", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a burger_name
    // and devoured property (req.body)
    console.log("Name of Burger: ", req.body.burger_name);
    db.Burgers.create({
      burger_name: req.body.burger_name
      // devoured: req.body.devoured
    }).then(function(dbBurgers) {
      // We have access to the new burger as an argument inside of the callback function
      res.redirect("/");
    }).catch(function (error){
      res.json(error);
    });
  });

  // PUT route for updating burgers. We can get the updated burger data from req.body
  app.put("/burgers/:id", function(req, res) {
    var condition = req.body.devoured;
    console.log("devoured: ", req.body.devoured);
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Burgers.update({
      // burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurgers) {
      res.redirect("/");
    });
  });


  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  // app.delete("/api/burgers/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
  //   db.burgers.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbburgers) {
  //     res.json(dbburgers);
  //   });

  // });


};