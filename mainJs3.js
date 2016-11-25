function SolidList() {
	this.solidList = document.createElement("UL");

	this.add = function(a) {
		var addLi = new CreateLiAndAll(a);
		this.solidList.appendChild(addLi.listElement);
	}
}

function CreateLiAndAll (liText) {
	this.listElement = li();

	function li() {
		var newLi = document.createElement("LI");
		newLi.innerText = liText;
		newLi.appendChild(button("DELETE"));
		newLi.appendChild(button("INSERT"));
		newLi.appendChild(button("EDIT"));
		inputString.value = "";

		return newLi;
	} 

	function button(name) {
		var btn = document.createElement("BUTTON");
		btn.innerText = name;

		return btn;
	}
}

var inputString = document.createElement("INPUT");
inputString.value = "TYPE IN HERE";

inputString.onfocus = function() {
	if (this.value == 'TYPE IN HERE') {
		this.value = '';
	}
};

inputString.onkeypress = function(e){      
	if(e.keyCode == 13) {
		e.preventDefault();
		list.add(inputString.value);
	}
};


var list = new SolidList();
document.body.appendChild(inputString);
document.body.appendChild(list.solidList);