/*
	editEquipment.js
	DENISE THUY VY NGUYEN 
	=^.,.^= 10-25-2017
*/

function toggleEditting(id) {
	var checkedBox = document.getElementById(id);	
	var attachedElements = document.getElementsByName(id);
	var currentTD;
	
	for(var index = 0; index < attachedElements.length; index++)
	{
		//alert("Not in here");
		currentTD = attachedElements[index];
		currentTD.setAttribute("contentEditable", checkedBox.checked);
	}
}

/*
BROKEN SHIT DON'T USE
WARNING - HERE BE DRAGONS

DO NOT ENTER WITHOUT DWARVES
*/

//Retrieve items to be edited
function createEditPg(){
	var numberCheckboxChecked = countChkbox();
	
};

//Counts checkbox
function countChkbox(){
	var checkboxes = document.getElementsByName("getEdit");	
	var numberChk = 0;
	
	if(checkboxes == null || checkboxes == undefined || checkboxes.length == 0){
		alert("You have not selected any times");
	}
	
	var checkbox;
	//Iterate through the checkboxes 
	for(var index = 0; index < checkboxes.length; index++){
		checkbox = checkboxes[index];
		
		if(checkbox.checked)
			numberChk++;
	}
	alert("You have selected " + numberChk + " items to edit!");	
	return numberChk;
};

function populateEditInterview(){
	var textElement = document.createTextNode("Enter then description: "); //Writes the text "Enter the description: " to the screen
	var descriptionValue = document.createElement("input"); //Creates a new input HTML element
	descriptionValue.setAttribute("type", "text");

}
