(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

})(window);

// User Stories
/**
 * I can add a task to my todo list so that I can remember to do it later.
 *
 * What do I need to do as the user to add a task?
 * - Click on text box for a new task (<input id="newtask">)
 * need create function that returns input
		// create variable to hold nodelist of input data- use querySelector to target <ul> element with class "todo-list"
		//create variable for submitting data & assign event listner to it (no click, have to press `enter` on the keyboard)
		//use .value to return input

// I can edit a task on my todo list so that I can correct typos.
	// assign event listner `dblclick` to <li>
	// assign className " editing"

// I can mark a task as complete so that I remember that I have done it.
	// target <li> element
	//assign event listner `click`
	//assign className "complete" when checked

// I can mark a completed task as incomplete so that I actually complete it this time.
	// assign className "" (empty string)

// I can delete a task from my todo list so that I don't have to see it any more.
	// assign <button> event listner `click`
	// assign className "destroy"

// I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
	// target <button> element with className "clear-completed"
	// add event listener `click`
	// assign style "display: none"

// I can filter the list of tasks so that I can see just what tasks I have completed and what are left to do.
	// target <a> tag with className "Active" "All" and "Completed"
	// assign event listener "click"
	// assign className "selected" when clicked
