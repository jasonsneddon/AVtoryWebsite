/* 
  newSignup.js
  
  DENISE THUY VY NGUYEN
  =^.,.^= 10-24-2017
*/

// Create a AVtory user
function createUser() {
    var sUser = document.getElementById("user").value;
    var sPassword = document.getElementById("pw").value;
    
    //#DATABASE#//
    if(checkInput()) {
	//submit query and wait for responce 
	if(submitForm()) {
	    confirmInput();
	    }
	}
    else {// alert that form submit failed
	}

	//---------------------- functions createProject() ---------------------------------
    // check input for invalid inputs 
    // current dummy with out back end restrictions 
    function checkInput() {
	if(sUser == "") {
	    alert("Invalid");
	    return false;
	    }
	
	if(sPassword == "") {
	    alert("Invalid name input.");
	    return false;
	    }

	return true;
	}
    
    //#DATABASE#//
    // currently dumby 
    function submitForm() {
		return true;
	}
    
    // confirmation of submission of information
    function confirmInput() {
	alert("Your input is: \n Username: " + sUser + 
	      "\n PW: " + sPassword );
	}   
}

function clearProject() {
    document.getElementById("signupForm").reset();
}