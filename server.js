var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var orm = require ("./config/orm.js");

var app = express();
var PORT = process.env.PORT || 3001;

// var data = orm.selectWhere("burgers", selectWhereCallback);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(PORT);
