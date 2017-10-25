/* 
  newSignup.js
  
  DENISE THUY VY NGUYEN
  =^.,.^= 10-25-2017
*/

// Create a AVtory user
function createUser() {
    var sCategory = document.getElementById("category").value;
    var sLocation = document.getElementById("loc").value;
    var sItem = document.getElementById("item").value;
    var sDesc = document.getElementById("description").value;
    var sModel = document.getElementById("model").value;
    var sSerial = document.getElementById("serial").value;
    var sService = document.getElementById("serviceItem").value;

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
	if(sCategory == "") {
	    alert("Invalid");
	    return false;
	    }
	
	if(sLocation == "") {
	    alert("Invalid location.");
	    return false;
	    }
	
	if(sItem == "") {
	    alert("Invalid item name.");
	    return false;
	    }
	
	if(sDesc == "") {
	    alert("Invalid description.");
	    return false;
	    }
	
	if(sModel == "") {
	    alert("Invalid model.");
	    return false;
	    }
	 if(sSerial ==""){
	    alert("Invalid.");
	    	return false
	    }
	 if(sService == ""){
	 	alert("Invalid service type.");
	 	return flase;
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
	alert("Your input is: \n Category:" + sCategory + 
	      "\n Location:" + sLocation +
	      "\n Item:" +sItem+
	      "\n Description:" +sDesc+
	      "\n Model:" +sModel+
	      "\n In Service:" +sService);
	}   
}

function clearProject() {
    document.getElementById("addEquipmentForm").reset();
}