$(document).ready(function() {
	// Getting a reference to the input field where user adds a new burger
	var newBurgerInput = $("input.new-burger");
	// New burger will go inside the .burger-container
	var burgerContainer = $(".burger-container");
	// Adding event listeners for adding burgers
	$(document).on("submit", "#burger-form", addBurger);

	// Initial burger array
	var burgers;

	// Getting burgers from database when page loads
	getBurgers();

	// Function resets the burgers displayed with new burgers from the database
	function initializeRows() {
		burgerContainer.empty();
		var rowsToAdd = [];
		for (var i = 0; i < burgers.length; i++) {
			rowsToAdd.push(creatNewRow(burgers[i]));
		}
		burgerContainer.prepend(rowsToAdd);
	}

	// Function grabs burgers from the database and updates the view
	function getBurgers() {
		$.get("/api/burgers", function(data) {
			console.log("new burger: ", data);
			burgers = data;
			initializeRows();
		});
	}

	// Function constructs a burger row
	function createNewRow(burgers) {
		var newInputRow = $("<li>");
		newInputRow.addClass("list-group-burger burger-type");
		var newBurgerSpan = $("<span>");
		newBurgerSpan.text(burgers.burger_name);
		newInputRow.append(newBurgerSpan);
		var newBurgerInput = $("<input>");
	    newBurgerInput.attr("type", "text");
	    newBurgerInput.addClass("edit");
	    newBurgerInput.css("display", "none");
	    newBurgerRow.append(newBurgerInput);
	    var devourBtn = $("<button>");
	    devourBtn.addClass("btn btn-default");
	    devourBtn.text("Devour it!");
	    devourBtn.data("id", burger.id);

	}

	// Function adds a new burger into database and updates the view
	function addBurger(event) {
		event.preventDefault();
		// if(!newBurgerInput.val().trim()) { return; }
		var burger = {
			burger_name: newBurgerInput
				.val()
				.trim(),
			complete: false
		};

		// Posting the new burger, calling getburgers() when done
		$.post("/api/burgers", burger, function() {
			getBurgers();
		});
		newBurgerInput.val("");
	}

}); // End document.ready function
