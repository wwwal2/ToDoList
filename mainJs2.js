var inputString = document.getElementById('inputString');
var wholeListSolid = document.getElementById("wholeList");
var elementsArray = [];

inputString.onfocus = function(){
	if(this.value == 'Press ENTER to add') {
		this.value = '';
	}
	this.style.color = "green";
};
// List item creation
inputString.onkeypress = function(e){      
	if(e.keyCode == 13) {
		e.preventDefault();
		newListElement();
		createButton("DELETE");
		createButton("EDIT");
		createButton("INSERT");
		console.log(elementsArray);
	}
};
// creation of list text element
function newListElement(){
	var listElement = document.createElement("LI");
	var listValue = document.createTextNode(inputString.value);
	listElement.appendChild(listValue);
	wholeListSolid.appendChild(listElement); 
	inputString.value = "";
	inputString.focus();
	elementsArray.push(listElement);
}
// creation of buttons
function createButton(text){
	var b = document.createElement("button");
	var c = document.createTextNode(text);
	b.value = text;
	b.appendChild(c);
	elementsArray[elementsArray.length - 1].appendChild(b);
}
// Action Buttons code
wholeListSolid.addEventListener('click', function(event) {
  switch (event.target.value){
  	case "DELETE":
  	//this.parentElement.removeChild(this.children[1]); - doesnt work
  	break;
  	
  	case "EDIT":
  	var newText2 = document.createTextNode(prompt("Enter new text"));
  	//this.parentElement.replaceChild(newText2, this.children[1]) - doesnt work
  	break;

  	case "INSERT":
  	var newText2 = document.createTextNode(prompt("Enter new text"));
    var addListElement = document.createElement("li");
    addListElement.appendChild(newText2);
    addListElement.className = "addListClass";    
    
    //blank2[event.target.parentNode.nodeName].appendChild(addListElement) - doesnt work
    //blank2[0].appendChild(addListElement);  - doesnt work
    this.children[0].appendChild(addListElement); //- for 0 only
    console.log(this.children);
    
    console.log(event);
  	break;
  }
}, false);






