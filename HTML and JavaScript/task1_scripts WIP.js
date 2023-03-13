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
		
	var input = document.getElementById("input").value;
	
	
	
		
		
		
		  // Get references to the form value
		  document.getElementById("calculate").onclick = function() {handleSubmit()}; 
		  function handleSubmit() {
			var input = document.getElementById("input");
			alert("The number you chose is " + input.value);
		  }
		  
	
		 // Calculate the factorial results:
		 //HINT: the factorial of 0 is 1.
		 var factorial = 1;	 
		 for (var x = 2; x <= input; x++) {
			factorial *= x;
		 }
		 // Calculate the squared results:
		 var squared = input * input;	 
		 
		 
		  // Calculate the cubed results:
		  var cubed = input * input * input;	  
		  
		  
		  
		  //display factorial, squared and cubed results
		  document.getElementById("factorial").value = factorial;
		  document.getElementById("cubed").value = cubed;
		  document.getElementById("squared").value = squared;
		  
	// Return false to prevent submission:
	return false; 
	
}// End of calculate() function.

// Function called when the window has been loaded.
document.addEventListener('DOMContentLoaded', function() {
    alert("Welcome to the calculator.");
}, false);
// Function needs to add an event handler to the form.
//function init() {



    // Add an event handler to the form:
	 document.addEventListener("DOMContentLoaded", function() {
		 document.getElementById("calculate").addEventListener("click", calculate);
	 });
  // End of init() function.
//	}
// Assign an event handler to the window's load event:
