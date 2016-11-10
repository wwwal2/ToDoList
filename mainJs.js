var inputString = document.getElementById('inputString');
var wholeListSolid = document.getElementById("wholeList");
var delButtonsArray = [];
var editButtonArray = [];
var insertButtonArray = [];

inputString.onfocus = function(){
  if(this.value == 'Press ENTER to add') {
      this.value = '';
    }
    this.style.color = "green";
};

// Checked list element
wholeListSolid.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);


// Filling 
inputString.onkeypress = function(e){      
  if(e.keyCode == 13) {
      e.preventDefault();
      newListElement();
      actionMode();
  }
};

function newListElement() {
  //List element code
  var listElement = document.createElement("li");
  var listValue = document.createTextNode(inputString.value);
  listElement.appendChild(listValue);
  wholeListSolid.appendChild(listElement); 
  
  // Delete button element code
  var delButtons = document.createElement("button");
  var buttonText = document.createTextNode("DELETE");
  delButtons.className = "deleteClass";
  delButtons.appendChild(buttonText);
  listElement.appendChild(delButtons);
  delButtonsArray.push(delButtons);

  // Edit button element code
  var edit = document.createElement("button");
  var editButtonText = document.createTextNode("EDIT");
  edit.className = "editClass";
  edit.appendChild(editButtonText);
  listElement.appendChild(edit);
  editButtonArray.push(edit);

  //Insert button element
  var insertButton = document.createElement("button");
  var insertButtonText = document.createTextNode("INSERT");
  insertButton.className = "insertClass";
  insertButton.appendChild(insertButtonText);
  listElement.appendChild(insertButton);
  insertButtonArray.push(insertButton);
}
  
function actionMode(){
//Delete button action
  for (i = 0; i < delButtonsArray.length; i++) {
  delButtonsArray[i].onclick = function() {
    var string = this.parentElement;
    string.style.display = "none";
    }
  }

  //Edit button action
  for (j = 0; j < editButtonArray.length; j++) {
    editButtonArray[j].onclick = function() {
    var blank = this.parentElement;
    var newText = document.createTextNode(prompt("Enter new text"));
    var replaceListElement = document.createElement("li");
    replaceListElement.appendChild(newText);    
    wholeListSolid.appendChild(replaceListElement);
    blank.style.display = "none";
    }
  }
  
  // insert button action
  for (k = 0; k < insertButtonArray.length; k++) {
    insertButtonArray[k].onclick = function() {
    var blank2 = this.parentElement;
    var newText2 = document.createTextNode(prompt("Enter new text"));
    var addListElement = document.createElement("li");
    addListElement.appendChild(newText2);
    addListElement.className = "addListClass";    
    blank2.appendChild(addListElement);
    }
  }

  inputString.value = "";
  inputString.focus();
}













