// Portoflio Assignment Task 1
/*Create a special calculator that reads a number from the user, and performs a series of mathematical calculations as listed:

If the user inputs the number 4:

Calculate the factorial of a number - A factorial is the product of an integer and all the integers below it: example - the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
Calculate the square of a number - A number squared is a number that is multiplied by itself: example - 4 is equal to 16 (4 * 4).
Calculate the cube of the number - A number cubed is a number that is multiplied by itself twice: example - 4 is equal to 64 (2 * 2 * 2). 
*/

// Function called when the form is submitted.
// Function performs the calculations and returns false.
function calculate() {



		// For storing the factorial, squared and cubed results:
		
	let number = document.getElementById("number").value;
	let factorial = 1;
	for (let x = 2; x <= number; x++) {
		factorial *= x;
	}
	let square = number * number;
	let cube = number * number * number;
		
		
		
		  // Get references to the form value:
		  
		  
	
		 // Calculate the factorial results:
		 //HINT: the factorial of 0 is 1.
		 
		 
		 // Calculate the squared results:
		 
		 
		 
		  // Calculate the cubed results:
		  
		  
		  
		  
		  //display factorial, squared and cubed results
		  
		  
	// Return false to prevent submission:
	return false; 
	
}// End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event handler to the form.
function init()
    // Add an event handler to the form:
  // End of init() function.

// Assign an event handler to the window's load event:
