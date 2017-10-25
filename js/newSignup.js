/* 
  newSignup.js
  
  DENISE THUY VY NGUYEN
  =^.,.^= 10-24-2017
*/

// Create a AVtory user
function createUser() {
    var sUser = document.getElementById("user").value;
    var sFirst = document.getElementById("fname").value;
    var sLast = document.getElementById("lname").value;
    var sMail = document.getElementById("email").value;
    var sPassword = document.getElementById("userPW").value;
    
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
	
	if(sFirst == "") {
	    alert("Invalid name input.");
	    return false;
	    }
	
	if(sLast == "") {
	    alert("Invalid name input.");
	    return false;
	    }
	
	if(sMail == "") {
	    alert("Invalid e-mail entry.");
	    return false;
	    }
	
	if(sPassword == "") {
	    alert("Invalid password.");
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
	alert("Your input is: \n User Type:" + sUser + 
	      "\n First Name:" + sFirst +
	      "\n Last name:" + sLast + 
	      "\n email: " + sMail +
	      "\n PW:" + sPassword );
	}   
}

function clearProject() {
    document.getElementById("signupForm").reset();
}